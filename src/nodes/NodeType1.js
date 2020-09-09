import Vue from 'vue'
import NodeType from '../packages/chart-flow/NodeType'

let catagory = {
  id: 'function',
  label: '分类1',
}
let _id = 'NodeType1'
class NodeType3 extends NodeType {
  static id() {
    return _id
  }

  static component() {
    Vue.component(_id, function(resolve) {
      require(['./NodeType1.vue'], resolve)
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
        flag = false
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
      color: '#E8E7AF',
      label: 'NodeType1',
      icon: null,
      nodeTypeId: _id,
    })
    this.props = {}
  }
}

export default NodeType3
