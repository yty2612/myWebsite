<template>
  <div class="pageBox">
    <div class="menuBox" v-if="showMenu">
      <div class="pageTitle">
        <span class="ownIcon">LzL</span>
        <Icon type="md-heart-outline" />
        廖中铃个人网
      </div>
      <Menu  mode="vertical" active-name="first" theme="dark" width="250" accordion>
        <MenuItem name="first" to="/mainPage" replace>
          <Icon type="md-heart-outline" />我的首页
        </MenuItem>
        <Submenu  name="groupA">
          <template slot="title">
            <Icon type="ios-filing" />
            内容管理
          </template>
          <MenuItem name="pageA1">
            <Icon type="md-document" to="/textPage" replace/>
            文章管理
          </MenuItem>
          <MenuItem name="pageA2">
            <Icon type="md-chatbubbles" />
            我的作品
          </MenuItem>
        </Submenu>
        <Submenu name="groupB">
          <template slot="title">
            <Icon type="ios-filing" />
            账号管理
          </template>
          <MenuItem name="pageB1">
            <Icon type="md-heart" />
            密码管理
          </MenuItem>
          <MenuItem name="pageB2">
            <Icon type="md-leaf" />
            我的信息
          </MenuItem>
        </Submenu>
      </Menu>
    </div>
    <div class="content">
      <div class="mainContent">
        <router-view />
      </div>
      <Footer/>
    </div>
  </div>
</template>
<script>
  import mainPage from './views/components/mainPage.vue'
  import Footer from './views/components/Footer.vue'
  import { useRouter } from 'vue-router'
  export default {
    components: {
      mainPage,
      Footer,
      useRouter
    },
    name: 'index',
    data(){
      return{
        showMenu:true,
      }
    },
    created(){
    },
    methods:{}
  }
</script>
<style scoped lang="scss">
  .pageBox{
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    background-color: #ffffff;
    .menuBox{
      height: 100vh;
      width: 250px;
      overflow: hidden;
      overflow-y:auto;
      background-color:#515a6e ;
      .pageTitle{
        height: 50px;
        font-size: 20px;
        color: #fff;
        line-height: 50px;
        .ownIcon{
          font-size: 25px;
          color: aqua;
          font-weight: bolder;
          margin-right: 10px;
          font-style:italic
        }
      }
    }
    .content{
      display: flex;
      flex-direction: column;
      width:100%;
      min-height: 100vh;
      overflow: hidden;
      .mainContent{
        height: calc(100vh - 50px);
        overflow: auto;
        padding: 10px;
      }
    }
  }

</style>
<style lang="scss">
  /*!* iphone6s *!*/
  /*@media screen and (min-width: 375px) and (-webkit-device-pixel-ratio: 3) {*/
  /*body {background-color: #0FF000;}*/
  /*}*/
  /*!* pc *!*/
  /*@media screen and (min-width: 1100px) {*/
  /*body {background-color: black;}*/
  /*}*/
</style>

