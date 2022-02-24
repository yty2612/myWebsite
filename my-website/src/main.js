import Vue from 'vue'
import App from './App.vue'
import router from './router'
import _ from 'lodash'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css' //iview样式
import {Spin} from 'view-design'
// import './global/iViewTheme.less'

Vue.config.productionTip = false
Vue.use(ViewUI)
window._ = _
window.$spin = Spin//遮罩层


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
