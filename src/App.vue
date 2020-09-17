<template>
  <div id="app">
    <el-button :disabled="!isChanged" @click="save" type="primary">保存</el-button>
    <ChartFlow
      ref="flow"
      :registerNodeType="registerNodeType"
      :data="nodes"
      :readonly="false"
      :showTips="false"
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
    async registerNodeType(editor) {
      await editor.registerNodeType(function(a) {
        return new Promise(resolve => require(['../src/nodes/NodeType1.js'], resolve))
      })
      await editor.registerNodeType(function(a) {
        return new Promise(resolve => require(['../src/nodes/NodeType2.js'], resolve))
      })
      await editor.registerNodeType(function(a) {
        return new Promise(resolve => require(['../src/nodes/NodeType3.js'], resolve))
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
