import Vue from 'vue'
import App from './App.vue'
import { Row, Input, Form, FormItem, Button, Scrollbar } from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Row)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Scrollbar)

new Vue({
  render: h => h(App),
}).$mount('#app')
