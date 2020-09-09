# 0.1.0 (2020-09-09)


### Bug Fixes

* 修复bug(index.js引用错误) ([8696db8](https://github.com/alkalixin/chart-flow/commit/8696db826216898c281f980bbe8a5d77e1b97ee4))
* 修复cloneNodes方法props存的是引用 ([639c1dc](https://github.com/alkalixin/chart-flow/commit/639c1dc6f98db415f6ca1c3742e706edfdfa467e))
* 修复ctrl+c逻辑中props存的是引用 ([25c34ed](https://github.com/alkalixin/chart-flow/commit/25c34ed3091c5802b56feceda666b943b89c77e4))


### Features

* 0.0.17 ([764a7a9](https://github.com/alkalixin/chart-flow/commit/764a7a99234473bcf73497a5471635c70c41191c))
* label不再支持function ([1b13195](https://github.com/alkalixin/chart-flow/commit/1b1319569be15b357e60e510cffd870a0a7c6540))
* release 0.0.11 ([5d57f5d](https://github.com/alkalixin/chart-flow/commit/5d57f5dfcdb8fe529dbc2333779de7f14d790a85))
* release 0.0.12 ([5ea7d65](https://github.com/alkalixin/chart-flow/commit/5ea7d65bcfc0e7aa72827b3861e1aac5c558ec2a))
* release 0.0.16 ([1d206e8](https://github.com/alkalixin/chart-flow/commit/1d206e8243897613df63d16c6ee64c4fb2d203c2))
* shift+单击节点：可以选中该路径上的全部节点 ([7e00020](https://github.com/alkalixin/chart-flow/commit/7e000207061078d327b9239b0507098d1e270443))
* 完成缩放（下一步：完善事件交互） ([df0ab8d](https://github.com/alkalixin/chart-flow/commit/df0ab8d17c14bdd8d6bd2ed83425de027edb9ee7))
* 完成节点复制功能（下一步：完成节点导入|导出） ([fbdd9bb](https://github.com/alkalixin/chart-flow/commit/fbdd9bbc4e8a23b509979463431d518531478a15))
* 完成节点属性渲染 ([25c945d](https://github.com/alkalixin/chart-flow/commit/25c945dd6f478d0f236a5445dda79be3b0fb48fe))
* 完成设置菜单（下一步：完成helper和弹出框） ([d1e2bd7](https://github.com/alkalixin/chart-flow/commit/d1e2bd729dbfa762a4d22b67ef3f4c674105c35a))
* 实现节点或连线删除交互（下一步：实现整体拖动、缩放） ([7f11cd0](https://github.com/alkalixin/chart-flow/commit/7f11cd039ce2be7977474997194e5cbbd26bf2d1))
* 打包发布 ([5b51341](https://github.com/alkalixin/chart-flow/commit/5b513411621b1986f256105943d2bf6c7ca6a1f7))
* 支持id为数字的选择器 ([1175612](https://github.com/alkalixin/chart-flow/commit/1175612aa3d73e232dd4ef62cc485a8af528e40a))
* 支持id为数字的选择器 ([66aeb52](https://github.com/alkalixin/chart-flow/commit/66aeb528dd714464e701641eb2df3707da6df4e5))
* 新增api ([da5898a](https://github.com/alkalixin/chart-flow/commit/da5898ae185ee57803100726ae5d35edd448a653))
* 新增API ([f70dfcd](https://github.com/alkalixin/chart-flow/commit/f70dfcd9295cc46e826ad610851d8be1147b7d54))
* 新增api-getNodeDatumById ([2a2d41b](https://github.com/alkalixin/chart-flow/commit/2a2d41bd236ffe09bdc0b607dd43ee5b47186caf))
* 测试 ([9748e15](https://github.com/alkalixin/chart-flow/commit/9748e151e49a4f6b1be249ca1579d9da78698ecc))
* 监听键盘事件 ([1e9a35e](https://github.com/alkalixin/chart-flow/commit/1e9a35ec661b69c3803a1c9fb7d1dfede04208f9))
* 需要完成节点属性渲染 ([08e6888](https://github.com/alkalixin/chart-flow/commit/08e688803995934d83d06bf93df8f56ea4244c76))


### BREAKING CHANGES

* isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.



# 0.1.0 (2020-09-09)


### Bug Fixes

* 修复bug(index.js引用错误) ([8696db8](https://github.com/alkalixin/chart-flow/commit/8696db826216898c281f980bbe8a5d77e1b97ee4))
* 修复cloneNodes方法props存的是引用 ([639c1dc](https://github.com/alkalixin/chart-flow/commit/639c1dc6f98db415f6ca1c3742e706edfdfa467e))
* 修复ctrl+c逻辑中props存的是引用 ([25c34ed](https://github.com/alkalixin/chart-flow/commit/25c34ed3091c5802b56feceda666b943b89c77e4))


### Features

* 0.0.17 ([764a7a9](https://github.com/alkalixin/chart-flow/commit/764a7a99234473bcf73497a5471635c70c41191c))
* label不再支持function ([1b13195](https://github.com/alkalixin/chart-flow/commit/1b1319569be15b357e60e510cffd870a0a7c6540))
* release 0.0.11 ([5d57f5d](https://github.com/alkalixin/chart-flow/commit/5d57f5dfcdb8fe529dbc2333779de7f14d790a85))
* release 0.0.12 ([5ea7d65](https://github.com/alkalixin/chart-flow/commit/5ea7d65bcfc0e7aa72827b3861e1aac5c558ec2a))
* release 0.0.16 ([1d206e8](https://github.com/alkalixin/chart-flow/commit/1d206e8243897613df63d16c6ee64c4fb2d203c2))
* shift+单击节点：可以选中该路径上的全部节点 ([7e00020](https://github.com/alkalixin/chart-flow/commit/7e000207061078d327b9239b0507098d1e270443))
* 完成缩放（下一步：完善事件交互） ([df0ab8d](https://github.com/alkalixin/chart-flow/commit/df0ab8d17c14bdd8d6bd2ed83425de027edb9ee7))
* 完成节点复制功能（下一步：完成节点导入|导出） ([fbdd9bb](https://github.com/alkalixin/chart-flow/commit/fbdd9bbc4e8a23b509979463431d518531478a15))
* 完成节点属性渲染 ([25c945d](https://github.com/alkalixin/chart-flow/commit/25c945dd6f478d0f236a5445dda79be3b0fb48fe))
* 完成设置菜单（下一步：完成helper和弹出框） ([d1e2bd7](https://github.com/alkalixin/chart-flow/commit/d1e2bd729dbfa762a4d22b67ef3f4c674105c35a))
* 实现节点或连线删除交互（下一步：实现整体拖动、缩放） ([7f11cd0](https://github.com/alkalixin/chart-flow/commit/7f11cd039ce2be7977474997194e5cbbd26bf2d1))
* 打包发布 ([5b51341](https://github.com/alkalixin/chart-flow/commit/5b513411621b1986f256105943d2bf6c7ca6a1f7))
* 支持id为数字的选择器 ([1175612](https://github.com/alkalixin/chart-flow/commit/1175612aa3d73e232dd4ef62cc485a8af528e40a))
* 支持id为数字的选择器 ([66aeb52](https://github.com/alkalixin/chart-flow/commit/66aeb528dd714464e701641eb2df3707da6df4e5))
* 新增api ([da5898a](https://github.com/alkalixin/chart-flow/commit/da5898ae185ee57803100726ae5d35edd448a653))
* 新增API ([f70dfcd](https://github.com/alkalixin/chart-flow/commit/f70dfcd9295cc46e826ad610851d8be1147b7d54))
* 新增api-getNodeDatumById ([2a2d41b](https://github.com/alkalixin/chart-flow/commit/2a2d41bd236ffe09bdc0b607dd43ee5b47186caf))
* 测试 ([9748e15](https://github.com/alkalixin/chart-flow/commit/9748e151e49a4f6b1be249ca1579d9da78698ecc))
* 监听键盘事件 ([1e9a35e](https://github.com/alkalixin/chart-flow/commit/1e9a35ec661b69c3803a1c9fb7d1dfede04208f9))
* 需要完成节点属性渲染 ([08e6888](https://github.com/alkalixin/chart-flow/commit/08e688803995934d83d06bf93df8f56ea4244c76))


### BREAKING CHANGES

* isolate scope bindings definition has changed.

    To migrate the code follow the example below:

    Before:

    scope: {
      myAttr: 'attribute',
    }

    After:

    scope: {
      myAttr: '@',
    }

    The removed `inject` wasn't generaly useful for directives so there should be no code using it.



<a name="0.0.17"></a>
## [0.0.17](https://github.com/hong-boy/node-chart-flow/compare/v0.0.12...v0.0.17) (2018-04-10)


### Bug Fixes

* 修复cloneNodes方法props存的是引用 ([639c1dc](https://github.com/hong-boy/node-chart-flow/commit/639c1dc))
* 修复ctrl+c逻辑中props存的是引用 ([25c34ed](https://github.com/hong-boy/node-chart-flow/commit/25c34ed))


### Features

* label不再支持function ([1b13195](https://github.com/hong-boy/node-chart-flow/commit/1b13195))
* release 0.0.16 ([1d206e8](https://github.com/hong-boy/node-chart-flow/commit/1d206e8))
* 支持id为数字的选择器 ([1175612](https://github.com/hong-boy/node-chart-flow/commit/1175612))
* 支持id为数字的选择器 ([66aeb52](https://github.com/hong-boy/node-chart-flow/commit/66aeb52))
* 新增API ([f70dfcd](https://github.com/hong-boy/node-chart-flow/commit/f70dfcd))



<a name="0.0.14"></a>
## [0.0.14](https://github.com/hong-boy/node-chart-flow/compare/v0.0.12...v0.0.14) (2018-04-01)


### Features

* label不再支持function ([1b13195](https://github.com/hong-boy/node-chart-flow/commit/1b13195))
* 新增API ([f70dfcd](https://github.com/hong-boy/node-chart-flow/commit/f70dfcd))



<a name="0.0.13"></a>
## [0.0.13](https://github.com/hong-boy/node-chart-flow/compare/v0.0.12...v0.0.13) (2018-04-01)


### Features

* label不再支持function ([1b13195](https://github.com/hong-boy/node-chart-flow/commit/1b13195))
* 新增API ([f70dfcd](https://github.com/hong-boy/node-chart-flow/commit/f70dfcd))



<a name="0.0.12"></a>
## [0.0.12](https://github.com/hong-boy/node-chart-flow/compare/v0.0.10...v0.0.12) (2018-03-27)


### Features

* release 0.0.11 ([5d57f5d](https://github.com/hong-boy/node-chart-flow/commit/5d57f5d))
* release 0.0.12 ([5ea7d65](https://github.com/hong-boy/node-chart-flow/commit/5ea7d65))
* 新增api ([da5898a](https://github.com/hong-boy/node-chart-flow/commit/da5898a))
* 新增api-getNodeDatumById ([2a2d41b](https://github.com/hong-boy/node-chart-flow/commit/2a2d41b))



<a name="0.0.11"></a>
## [0.0.11](https://github.com/hong-boy/node-chart-flow/compare/v0.0.3...v0.0.11) (2018-03-27)


### Bug Fixes

* 修复bug(index.js引用错误) ([8696db8](https://github.com/hong-boy/node-chart-flow/commit/8696db8))


### Features

* shift+单击节点：可以选中该路径上的全部节点 ([7e00020](https://github.com/hong-boy/node-chart-flow/commit/7e00020))
* 完成缩放（下一步：完善事件交互） ([df0ab8d](https://github.com/hong-boy/node-chart-flow/commit/df0ab8d))
* 完成节点复制功能（下一步：完成节点导入|导出） ([fbdd9bb](https://github.com/hong-boy/node-chart-flow/commit/fbdd9bb))
* 完成节点属性渲染 ([25c945d](https://github.com/hong-boy/node-chart-flow/commit/25c945d))
* 完成设置菜单（下一步：完成helper和弹出框） ([d1e2bd7](https://github.com/hong-boy/node-chart-flow/commit/d1e2bd7))
* 实现节点或连线删除交互（下一步：实现整体拖动、缩放） ([7f11cd0](https://github.com/hong-boy/node-chart-flow/commit/7f11cd0))
* 打包发布 ([5b51341](https://github.com/hong-boy/node-chart-flow/commit/5b51341))
* 新增api ([da5898a](https://github.com/hong-boy/node-chart-flow/commit/da5898a))
* 新增api-getNodeDatumById ([2a2d41b](https://github.com/hong-boy/node-chart-flow/commit/2a2d41b))
* 监听键盘事件 ([1e9a35e](https://github.com/hong-boy/node-chart-flow/commit/1e9a35e))
* 需要完成节点属性渲染 ([08e6888](https://github.com/hong-boy/node-chart-flow/commit/08e6888))



<a name="0.0.10"></a>
## [0.0.10](https://github.com/hong-boy/node-chart-flow/compare/v0.0.9...v0.0.10) (2018-03-18)



<a name="0.0.9"></a>
## [0.0.9](https://github.com/hong-boy/node-chart-flow/compare/v0.0.8...v0.0.9) (2018-03-18)



<a name="0.0.8"></a>
## [0.0.8](https://github.com/hong-boy/node-chart-flow/compare/v0.0.7...v0.0.8) (2018-03-18)


### Bug Fixes

* 修复bug(index.js引用错误) ([8696db8](https://github.com/hong-boy/node-chart-flow/commit/8696db8))



<a name="0.0.7"></a>
## [0.0.7](https://github.com/hong-boy/node-chart-flow/compare/v0.0.6...v0.0.7) (2018-03-18)



<a name="0.0.6"></a>
## [0.0.6](https://github.com/hong-boy/node-chart-flow/compare/v0.0.5...v0.0.6) (2018-03-18)



<a name="0.0.5"></a>
## [0.0.5](https://github.com/hong-boy/node-chart-flow/compare/v0.0.4...v0.0.5) (2018-03-17)


### Features

* 打包发布 ([5b51341](https://github.com/hong-boy/node-chart-flow/commit/5b51341))



