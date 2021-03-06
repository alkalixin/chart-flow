# chart-flow
A simple visual flow editor that forked from [node-chart-flow](https://github.com/hong-boy/node-chart-flow) which based on [node-red](https://github.com/node-red/node-red)

## Install

```shell
npm i @alkalixin/chart-flow -S
```

## Quick Start
```javascript
components: {
  ChartFlow: resolve => require(['@alkalixin/chart-flow'], resolve),
},
methods:{
  async registerNodeType(editor) {
    await editor.registerNodeType(function(a) {
      return new Promise(resolve => require(['../src/nodes/NodeType1.js'], resolve))
    })
  },
}
```
```vue
<template>
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
</template>
```
```javascript
// main.js
import '@alkalixin/chart-flow/dist/bundle.css'
```

## Development
You need `Node.js` at least `v8.9.4`

```shell
npm run serve
```

## Changelog
Detailed changes for each release are documented in the [release notes](CHANGELOG.md).

## LICENSE
[MIT](LICENSE)
