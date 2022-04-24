<template>
  <div class="layout">
    <el-container class="pageClass">
      <el-header class="header">
        <div class="iconContent">
          <span class="ownIcon">LzL</span>
          <i class="el-icon-moon-night"  style="line-height: 60px;margin-right: 20px;"></i>廖中铃个人网
        </div>
        <el-menu
            mode="horizontal"
            :router="true"
            text-color="#ffffff"
            background-color="#141932"
            active-text-color="#ffffff"
            default-active="index"
        >
          <el-menu-item index="/index" @click="toIndex">首页</el-menu-item>
          <el-menu-item index="/myPage/mainPage" @click="toMy">我的地盘</el-menu-item>
          <el-menu-item index="/otherPage/waitMake" @click="toOther">其他功能</el-menu-item>
          <div class="tips">
            <i class="el-icon-position" style="color: #ffffff;margin-right: 10px"></i>
            <a target="_blank" href="https://weixin.qq.com/" style="color: #ffffff">分享快乐</a>
          </div>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside class="leftMenu" v-if="!showIndex">
          <el-menu
              :router="true"
              background-color="#515a6e "
              v-if="showMy"
          >
            <el-menu-item index="/myPage/mainPage">
              <i class="el-icon-discount"></i>我的地盘
            </el-menu-item>
            <el-submenu  index="/myPage/contentOp">
              <template slot="title">
                <i class="el-icon-folder-opened"></i> 内容管理
              </template>
              <el-menu-item index="/myPage/contentOp/articleOp">
                <i class="el-icon-files"></i>文章管理
              </el-menu-item>
              <el-menu-item index="/myPage/contentOp/workShow">
                <i class="el-icon-medal"></i>作品展示
              </el-menu-item>
            </el-submenu>
            <el-submenu index="/myPage" >
              <template slot="title">
                <i class="el-icon-s-tools"></i> 账号管理
              </template>
              <el-menu-item index="/myPage/noInfo/passWordOp">
                <i class="el-icon-medal"></i>密码管理
              </el-menu-item>
              <el-menu-item index="/myPage/noInfo/myInfo">
                <i class="el-icon-key"></i>个人信息
              </el-menu-item>
            </el-submenu>
          </el-menu>
          <el-menu
              :router="true"
              background-color="#515a6e "
              v-else="showOther"
          >
            <el-menu-item index="/otherPage/waitMake">
              <i class="el-icon-discount"></i>更多需求（）
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main class="content"> <!--页面主要部分-->
            <router-view />
          </el-main>
          <el-footer><!--底部部分-->
            <Footer/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  import Footer from './views/components/Footer.vue'
  // import { useRouter } from 'vue-router'
  export default {
    components: {
      Footer,
      // useRouter
    },
    name: 'index',
    data(){
      return{
        showMenu:true,
        // router:useRouter,
        showMy:false,
        showOther:false,
        showIndex:true
      }
    },
    created(){
    },
    methods:{
      toMy(){
        this.showMy=true
        this.showOther=false
        this.showIndex=false
      },
      toOther(){
        this.showMy=false
        this.showIndex=false
        this.showOther=true
      },
      toIndex(){
        this.showIndex=true
      }
    }
  }
</script>
<style scoped lang="scss">
  .layout{
    min-height: 100vh;
    background-color: #ffffff;
  }
  .pageClass{
    margin: 0!important;
  }
  .header{
    padding: 0!important;
    display: flex;
    flex-direction: row;
    background-color: #141932;
    .iconContent{
      display: flex;
      color: #ffffff;
      flex-direction: row;
      line-height: 60px;
      margin-right: 200px;
      .ownIcon{
        font-size: 30px;
        color: aqua;
        font-style: italic;
        margin: 0 20px;
      }
    }
    .tips{
      margin-left: 1000px;
      float: right;
      line-height: 60px;
      margin-right: 60px;
      font-size: 20px;
    }
  }
  .leftMenu{
    height: calc(100vh - 60px);
    width: 250px;
    overflow: hidden;
    overflow-y:auto;
    background-color: #515a6e
  }
  .content{
    height: calc(100vh - 120px);
    overflow-y:auto;
  }
</style>
<style lang="scss">
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  /*!* iphone6s *!*/
  /*@media screen and (min-width: 375px) and (-webkit-device-pixel-ratio: 3) {*/
  /*body {background-color: #0FF000;}*/
  /*}*/
  /*!* pc *!*/
  /*@media screen and (min-width: 1100px) {*/
  /*body {background-color: black;}*/
  /*}*/
</style>

