'use strict'
import Constant from './Constant.js'
import moment from 'moment'
class NodeType {
  constructor(config = {}) {
    // 是否有更改 | 是否为新节点
    this.isChanged = true
    // 是否有错误
    this.isErrored = true

    // 节点中表单是否被更新且未点保存，即当该字段为false时，isChanged必定为true
    // 用于节点之间切换前的判断
    this.isUpdateForm = false

    // 初始化时是否显示红点
    this.initShowError = config.initShowError
    // 节点ID
    this.nodeId = config.nodeId
    // 坐标
    this.x = config.x
    // 坐标
    this.y = config.y
    // 节点类别
    this.catagory = config.catagory || Constant.DEFAULT_CATAGORY.id
    // 节点类型
    this.nodeTypeId = config.nodeTypeId
    // 连接到当前节点的节点：array类型，形如：[nid, nid2]
    this.prev = config.prev || []
    // 由当前节点链接到的节点：array类型，形如：[nid, nid2]
    this.next = config.next || []
    this.description = config.description || ''
    // 节点输入端口
    this.inputs = Object.assign(
      {
        enable: true, // 是否允许有数据源输入
        // max: 1, // 最多允许的数据源数量：n-允许有n个输入（默认：n=1）
        tip: '', // 鼠标悬停在输入端口按钮时显示的信息
      },
      config.inputs,
    )
    // 节点输出端口
    this.outputs = Object.assign(
      {
        enable: true, // 是否允许有数据源输出
        // max: 9999, // 最多允许输出的数量：n-允许有n个输出（默认：n=9999）
        tip: '', // 鼠标悬停在输出端口按钮时显示的信息
      },
      config.outputs,
    )
    // 节点背景色
    this.color = config.color || Constant.DEFAULT_NODE_BG_COLOR

    // 节点图标背景色
    this.iconBackgroundColor = config.iconBackgroundColor

    // 节点边框颜色
    this.borderColor = config.borderColor

    // 节点label：字符串
    this.label = config.label || ''
    // 节点图标
    this.icon = config.icon || null
    this.iconX = config.iconX || 5
    this.iconY = config.iconY || 0
    this.iconWidth = config.iconWidth || 20
    this.iconHeight = config.iconHeight || 30
    this.createTime = config.createTime || moment().format('YYYY-MM-DD HH:mm:ss')

    this.isChangedDesc = config.isChangedDesc || '未保存'
    this.isErroredDesc = config.isErroredDesc || '错误'
    // 节点自定义属性（业务属性）
    this.props = null
  }

  /**
   * 自定义校验规则
   * （当用户拖拽创建链接时，会触发toNode的validate事件）
   * PS：必须返回一个Boolean值
   * @param{svgNode} from 开始节点
   * @param{svgNode} to 当前节点
   */
  validate(from, to) {
    throw '必须重写validate(from, to)方法'
  }

  /**
   * 返回nodeTypeId
   */
  static id() {
    throw '必须重写static id()方法'
  }

  static tip() {
    // 节点信息描述
    return null
  }

  /**
   * 返回节点所对应的组件
   */
  static component() {
    throw '必须重写static component()方法'
  }
}

export default NodeType
