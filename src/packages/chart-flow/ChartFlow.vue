<template>
  <div class="dt-editor">
    <div class="dt-palette"></div>
    <div class="dt-workspace">
      <div class="dt-canvas"></div>
      <footer class="dt-footer"></footer>
    </div>
    <div class="divider-line"></div>
    <div class="dt-side-bar">
      <div class="dt-prop-box">
        <component
          :is="compt.id"
          :node.sync="compt.node"
          :editor="editor"
          @nodeFormChange="handleNodeFormChange"
          ref="prop"
        ></component>
      </div>
      <div class="divider-horizonal"></div>
      <div class="dt-tip-box"></div>
    </div>
  </div>
</template>

<script>
import Editor from './Editor.js'
import './css/main.less'
import './css/fontello/css/fontello-embedded.css'
export default {
  name: 'ChartFlow',
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
    registerNodeType: { type: Function },
    clearPropCompt: { type: Boolean, default: false }, // 清除动态组件，等价于 compt.id=null
    readonly: { type: Boolean, default: false }, // readonly只有在初始化的时候传入才有效
    showTips: { type: Boolean, default: true },
    intervalTips: { type: Number, default: 3000 },
    size: { type: Number, default: 5000 },
    showGrid: { type: Boolean, default: true },
    gapGrid: { type: Number, default: 20 },
    strokeColorGrid: { type: String, default: '#eee' },
  },
  data() {
    return {
      editor: null, // Editor实例
      compt: {
        // 当前要显示的组件
        id: null,
        node: null,
      },
      config: {
        readonly: this.readonly,
        data: this.data,
        settings: {
          size: this.size,
          tips: {
            enable: this.showTips,
            interval: this.intervalTips,
          },
          grid: {
            enable: this.showGrid,
            gap: this.gapGrid,
            strokeColor: this.strokeColorGrid,
          },
        },
      },
    }
  },
  created() {
    let thiz = this
    thiz.$nextTick(async function() {
      thiz.editor = new Editor(thiz.$el, thiz.config)
      // 注册节点类型
      await thiz.registerNodeType(thiz.editor)
      thiz.editor.getNodeTypes().forEach(RealNodeType => {
        // 注册节点属性组件
        RealNodeType.component()
        // 注册节点类别
        thiz.editor.registerCatagory(RealNodeType.getCatagory())
      })

      // 初始化
      thiz.editor.init()

      // 绑定事件
      thiz.editor.on('added-line', function(args) {
        thiz.$emit('addedLine', args)
      })
      thiz.editor.on('deleted-line', function(args) {
        thiz.$emit('deletedLine', args)
      })
      thiz.editor.on('deleted-node', function(args) {
        thiz.$emit('deletedNode', args)
      })
      thiz.editor.on('added-node', async function({ node }) {
        // 切换视图
        await thiz.switchPropView(node.datum())
        thiz.$emit('addedNode', node)
      })
      thiz.editor.on('pasted-node', function({ pastedNodes }) {
        thiz.$emit('pastedNode', pastedNodes)
      })
      thiz.editor.on('on-completed', function() {
        thiz.$emit('onCompleted', thiz)
      })
      thiz.editor.on('on-reRender-nodes', function(nodes) {
        thiz.$emit('onReRenderNodes', thiz, nodes)
      })
      thiz.editor.on('clicked-node', async function({ node }) {
        // 切换视图
        await thiz.switchPropView(node.datum())
        thiz.$emit('clickedNode', node)
      })
      thiz.editor.on('drag-nodes', () => {
        thiz.$emit('dragNodes', thiz)
        thiz.$emit('nodeChange', thiz)
      })
    })
  },
  destroyed() {
    this.editor.destroy()
  },
  methods: {
    switchPropView(datum) {
      // 切换视图
      let thiz = this
      return new Promise(resolve => {
        thiz.compt.id = null
        thiz.$nextTick(() => {
          let nodeTypeId = datum.nodeTypeId
          thiz.compt.id = nodeTypeId
          thiz.compt.node = datum
          resolve()
        })
      })
    },
    handleNodeFormChange() {
      this.$emit('nodeChange')
    },
  },
  watch: {
    clearPropCompt(val, oldVal) {
      if (val) {
        this.compt.id = null
      }
    },
  },
}
</script>

<style lang="less" scoped>
.dt-editor {
  // height: ~'calc(100vh - @{offsetHeight})';
  height: 100vh;
}
</style>
