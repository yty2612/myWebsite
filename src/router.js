import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const testRouterMap = [
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
    path: "/otherPage",
    name: "其他功能",
    component: () => import("./views/routerViewComponent.vue"),//子路由这里必须加一个这个文件，否则渲染不出来
    children: [
      {
        path: "waitMake",
        name: "更多需求",
        component: () => import("./views/otherPage/waitMake.vue")
      },
    ],
  },
  {
    path: "/myPage",
    name: "我的地盘",
    component: () => import("./views/routerViewComponent.vue"),
    children: [
      {
        path: "mainPage",
        name: "我的主页",
        component: () => import("./views/myPage/mainPage.vue")
      },
      {
        path: "contentOp",
        name: "内容管理",
        component: () => import("./views/routerViewComponent.vue"),//子路由这里必须加一个这个文件，否则渲染不出来
        children: [
          {
            path: "articleOp",
            name: "文章管理",
            component: () => import("./views/myPage/textPage.vue")
          },
          {
            path: "workShow",
            name: "作品展示",
            component: () => import("./views/myPage/workShow.vue")
          },
        ],
      },
    ],
  },
]

const router = new VueRouter({
  routes: testRouterMap,
})

export default router
