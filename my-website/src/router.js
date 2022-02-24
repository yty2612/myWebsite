import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const testRouterMap = [
  {
    path: "/",
    redirect: "/index",
  },
  // 登陆页
  {
    path: '/login',
    name: '登陆页',
    component:()=>import('./views/login.vue')
  },
  //系统主页
  {
    path: '/index',
    name: '主页',
    component: () => import('./views/index.vue')
  },
  {
    path: '/mainPage',
    name: '我的主页',
    component: () => import('./views/components/mainPage.vue')
  },
]

const router = new VueRouter({
  routes: testRouterMap,
})

export default router
