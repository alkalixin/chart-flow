<template>
  <div id="app">
    <el-button :disabled="!isChanged" @click="save" type="primary">保存</el-button>
    <ChartFlow
      ref="flow"
      :registerNodeType="registerNodeType"
      :beforeSwitchPropView="beforeSwitchPropView"
      :data="nodes"
      :readonly="false"
      :showTips="false"
      :sidebarInitWidth="630"
      @clickedNode="clickedNode"
      @addedNode="addedNode"
      @addedLine="addedLine"
      @deletedNode="deletedNode"
      @deletedLine="deletedLine"
      @pastedNode="pastedNode"
      @onCompleted="onCompleted"
      @onReRenderNodes="onReRenderNodes"
      @dragNodes="dragNodes"
      @nodeChange="handleNodeChange"
      @dragDividerLine="handleDragDividerLine"
      @dragDividerHorizonalLine="handleDragDividerHorizonalLine"
    ></ChartFlow>
  </div>
</template>

<script>
import ChartFlow from './packages/chart-flow/ChartFlow'

export default {
  name: 'App',
  components: {
    ChartFlow,
  },

  data() {
    return {
      nodes: [],
      isChanged: false,
    }
  },
  created() {
    let cache = sessionStorage.getItem('editorCache')
    if (cache) {
      let nodes = JSON.parse(cache)
      this.nodes = nodes
    }
  },
  methods: {
    getEditor() {
      return (window.editor = this.$refs.flow.editor)
    },
    save() {
      let editor = this.getEditor()
      let data = editor.exportData()
      for (let i = 0; i < data.length; i++) {
        let node = data[i]
        if (node.isErrored) {
          console.log('有内鬼，终止交易', node.isErrored)
          return false
        }
        if (node.isChanged) {
          editor.updateNodeIsChanged(node.nodeId, false)
          node.isChanged = false
        }
      }
      this.nodes = data

      sessionStorage.setItem('editorCache', JSON.stringify(data))
      this.isChanged = false
    },
    dragNodes(args) {
      this.isChanged = true
    },
    clickedNode(args) {
      console.log(`clicked node ${args}`)
    },
    addedNode(args) {
      console.log(`added node ${args}`)
      if (args.datum().isChanged) {
        this.isChanged = true
      }
    },
    addedLine(args) {
      console.log(`added line ${args}`)
      this.isChanged = true
    },
    deletedNode(args) {
      console.log(`delete node ${args}`)
      this.isChanged = true
    },
    deletedLine(args) {
      console.log(`delete line ${args}`)
      this.isChanged = true
    },
    pastedNode(args) {
      console.log(`pasted node ${args}`)
    },
    onCompleted(args) {
      console.log(`onCompleted ${args}`)
    },
    onReRenderNodes(args) {
      console.log(`onReRenderNodes ${args}`)
    },
    handleNodeChange() {
      console.log('node change')
      this.isChanged = true
    },
    handleDragDividerLine() {
      console.log('drag divider line')
    },
    handleDragDividerHorizonalLine() {
      console.log('drag divider horizonal line')
    },
    beforeSwitchPropView() {
      return new Promise((resolve, reject) => {
        this.$MessageBox
          .confirm('当前有未保存的内容，是否在离开页面前保存修改？', '确认信息', {
            distinguishCancelAndClose: true,
            confirmButtonText: '放弃内容',
            cancelButtonText: '回去保存',
          })
          .then(() => {
            resolve('confirm')
          })
          .catch(action => {
            resolve(action)
          })
      })
    },
    async registerNodeType(editor) {
      let arr = [1, 2, 3]
      let promises = arr.map(this.register)
      await Promise.all(promises)
    },
    async register(nodeName) {
      let editor = this.getEditor()
      // 注册单个节点
      await editor.registerNodeType(function() {
        return new Promise(resolve =>
          require([`../src/nodes/NodeType${nodeName}.js`], resolve),
        )
      })
    },
  },
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
