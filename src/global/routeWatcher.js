import Vue from 'vue'
import router from "../router"
import store from "../store"
import NProgress from "nprogress" // Progress 进度条
import "nprogress/nprogress.css" // Progress 进度条样式

const whiteList = ["/login"] // 不重定向白名单

//动态菜单格式转换
function menuFormat(d, level = 0, parent = '') {
  let t = []
  for (let e of d) {
    let tt = {
      path: parent + e.uri,
      name: e.name,
      icon: e.icon,
      level: level
    }
    if (!window._.isEmpty(e.children)) {
      tt.children = menuFormat(e.children, level + 1, tt.path)
    }
    t.push(tt)
  }
  return t
}
//**动态路由权限判定逻辑*/

router.beforeEach((to, from, next) => {
  NProgress.start() // 开启Progress
  if (store.state.isLogin) {
    if (store.state.menu.length === 0) {
      Vue.prototype.$fetch.get("/crm/index", {
        appCode: 'crm'
      }).then(r => {
        if (r.code === 0 && r.data && r.data.menus && r.data.permissionCodes) {
          sessionStorage.setItem("btnPermissions", r.data.permissionCodes) //按钮
          //获取菜单
          let menu = menuFormat(r.data.menus)
          if (menu.length === 0) { //当没有菜单时直接跳进主页
            next()
          }
          store.commit("SET_MENU", menu)
          store.commit("SET_SIDE_MENU", to)
          next()
        }
        else {
          console.info(r && r.message || '获取菜单失败')
        }
      }).catch(e => {
        console.info('网络错误，获取菜单失败')
      })
    }
    else {
      store.commit("SET_SIDE_MENU", to) //遍历菜单
      next()
    }
  }
  else {
    if (process.env.NODE_ENV === 'development') {
      if (whiteList.indexOf(to.path) !== -1) {
        // 在免登录白名单，直接进入
        next()
      }
      else {
        next("/login") // 否则全部重定向到登录页
        NProgress.done() // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
      }
    }
    else {
      location.href = window.g.mgrURL
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
