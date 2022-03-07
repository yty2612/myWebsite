<template>
  <div class="app">
    <AppHeader :menu="menu"/>
    <div class="app-body">
      <sideMenu v-if="showMenu" :data="sideMenu"/>
      <main class="main">
        <div class="container-fluid">
          <router-view/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import AppHeader from "../components/Header"
  import {mapState} from 'vuex'
  import {findPath} from '@zhangqingcq/plug-r-qw'

  export default {
    components: {
      AppHeader
    },
    data() {
      return {
        path: null
      };
    },
    computed: {
      ...mapState([
        'menu',
        'sideMenu'
      ]),
      activeIndex() {
        return window._.first(findPath({
          group: this.menu || [],
          condition: e => this.path.indexOf(e.path) !== -1
        })) || 0
      },
      showMenu() {
        const i = this.activeIndex
        const m = this.menu
        return m[i] && m[i].children && m[i].children.length > 0
      }
    },
    watch: {
      $route: {
        handler(after) {
          this.path = after.path

          this.$nextTick(function () {
            /*点击顶部菜单，自动跳转到该菜单下首个有效地址*/

            const i = this.activeIndex
            const m = this.menu
            const p = this.path
            if (m.length > 0 && m[i].children) {
              const t = this.getPath(m[i].children)
              if (t.indexOf(p) > -1 && t !== p) {
                this.$router.push(t)
              }
            }
          })
        },
        immediate: true
      }
    },
    methods: {
      getPath(m) {
        const t = m[0]
        if (t.children) {
          return this.getPath(t.children)
        }
        else {
          return t.path
        }
      }
    }
  }
</script>
