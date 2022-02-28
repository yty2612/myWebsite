import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const testRouterMap = [
  {
    path: "/",
    redirect: "/mainPage",
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
  {
    path: '/textPage',
    name: '测试页面',
    component: () => import('./views/textPage.vue')
  },
]

const router = new VueRouter({
  routes: testRouterMap,
})

export default router
