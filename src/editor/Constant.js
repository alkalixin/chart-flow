'use strict';

export default {
    PREFIX_OF_CATAGORY: 'cata_',
    CANVAS_ID: 'dt_canvas',
    PALETTE_NODE_CONFIG: 'palette-config', // 访问缓存在.dt-palette面板中的.node-tpl节点上配置信息
    SVG_INNER_CANVAS: 'dt-inner-canvas',
    SVG_BG_COLOR: '#FFF', // .dt-bg背景色
    SVG_GRID: 'dt-c-grid', // .dt-c-grid
    SVG_DT_NODE: 'dt-node',
    SVG_DT_LINE: 'dt-line',
    SVG_DT_LINE_GROUP: 'dt-line-group',
    SVG_DT_NODE_GROUP: 'dt-node-group',
    SVG_NODE_RECT: 'node-rect',
    SVG_NODE_STATUS: 'node-status',
    SVG_NODE_PORT: 'node-port',
    SVG_NODE_PORT_INPUT: 'node-port-input',
    SVG_LINE_SPLICE: 'line-splice', // 节点拖拽到两点之间
    TAG_LINE_SPLICE: 'line-splice',
    SVG_WIDTH_OF_NODE_ICON: 15, // .node-icon宽度
    SVG_MIN_WIDTH_OF_NODE_RECT: 120, // .node-rect最小宽度
    SVG_MAX_WIDTH_OF_NODE_RECT: 320, // .node-rect最大宽度
    SVG_SELECTOR_NODE_STATUS_CHANGED: '.node-status.changed',
    SVG_SELECTOR_NODE_STATUS_ERROR: '.node-status.error',
    DEFAULT_CATAGORY: { id: 'defaults', label: 'Defaults', }, // 默认节点类别
    DEFAULT_NODE_BG_COLOR: '#DEB887',
    DEFAULT_NODE_STATUS_CHANGED_COLOR: '#00bcff',
    DEFAULT_NODE_STATUS_ERROR_COLOR: '#ff6600',
    SVG_PALLETE_FACTOR_Y: 11, // 节点被拖放到dt-canvas上时y轴总是有11px的误差
    SVG_LINE_FACTOR_NODE_WIDTH: 100,
    SVG_LINE_FACTOR_NODE_HEIGHT: 30,
    SVG_SCALE_STEP: 0.2, // 控制缩放的步长
    KEY_CODE_DELETE: 46,
    KEY_CODE_ENTER: 13,
    KEY_CODE_MOUSE_LEFT: 0, // 鼠标左键
    KEY_CODE_MOUSE_RIGHT: 2, // 鼠标右键
    KEY_CODE_ALPHA_C: 67,
    KEY_CODE_ALPHA_V: 86,
    EVENT_DELETED_LINE: 'deleted-line', // 连线被删除后触发的事件
    EVENT_DELETED_NODE: 'deleted-node', // 节点被删除后触发的事件

};
