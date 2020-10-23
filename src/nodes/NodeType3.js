import Vue from 'vue'
import NodeType from '../packages/chart-flow/NodeType'

let catagory = {
  id: 'network',
  label: '分类2',
}
let _id = 'NodeType3'
class NodeType3 extends NodeType {
  static id() {
    return _id
  }

  static component() {
    Vue.component(_id, function(resolve) {
      require(['./NodeType3.vue'], resolve)
    })
  }

  static getCatagory() {
    return catagory
  }

  validate(from, to, editor) {
    let flag = true
    editor.getRelations().forEach(lineItem => {
      if (lineItem.to.node() === to.node()) {
        // 只允许有一个输入
        // flag = false
      }
    })
    return flag
  }

  constructor() {
    super({
      inputs: {
        enable: true,
      },
      outputs: {
        enable: true,
      },
      catagory: catagory.id,
      color: '#e7e7ae',
      label: 'NodeType3',
      icon: null,
      iconX: 60,
      iconY: 0,
      iconWidth: 20,
      iconHeight: 30,
      nodeTypeId: _id,
    })
    this.props = {}
  }
}

export default NodeType3
