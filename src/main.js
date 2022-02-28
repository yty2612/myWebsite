import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from "jquery"
import _ from 'lodash'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css' //iview样式
import {Spin} from 'view-design'
// import './global/iViewTheme.less'
/**
 * @description 注入 echarts 图表,全局控制，只加载一次主题
 * @param {object} registerTheme - 引入需要添加的主题和创建名称
 * @return {object} $echarts
 */
import echarts from "echarts";
/**
 * 引入地图组件
 */
import VueAMap from 'vue-amap'
VueAMap.initAMapApiLoader({
  // 到高德地图开放平台申请key
  key: '13a12024618c0c6b07bf6ee36b12cece',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch','AMap.Geolocation', 'AMap.Geocoder', 'AMap.DistrictSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  // 项目版本号
  uiVersion: '1.0.1'
})
Vue.config.productionTip = false
Vue.use(ViewUI)
Vue.use(VueAMap)

// 映射全局对象
window.$ = window.jQuery = $ //jQuery对象
window._ = _
window.$Spin = Spin //遮罩层
window.$echarts = echarts //图表



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

