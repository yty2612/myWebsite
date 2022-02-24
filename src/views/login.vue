<template>
  <div class="login">
    <div class="loginBox">
      <img src="../assets/img/9.jpg" class="leftImg"/>
      <div class="loginInfo">
        <div></div>
        <div class="infoBox">
          <div class="formItem">
            <img src="../assets/img/account-icon.png" class="imgHead">
            <Input v-model="userName" type="text" placeholder="请输入账户" class="input"/>
          </div>
          <div class="formItem">
            <img src="../assets/img/password-icon.png" class="imgHead">
            <Input v-model="passWord" type="text" placeholder="请输入账户密码"/>
          </div>
          <Button class="loginB" @click="login">登录</Button>
        </div>
        <Button class="registerB" @click="login">注册账户</Button>
        <Button class="forgetB" @click="login">忘记密码</Button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'login',
  data(){
    return{
      userName:"",
      passWord:"",
      remember:false,
    }
  },
  methods:{
    login(){
      this.$router.push({name:'主页', params:{userId: '123'}})
    }
  }
}
</script>
<style scoped lang="scss">
  .login{
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
    height: 100vh;
    background: url("../assets/img/001.jpg") no-repeat fixed center/ 100% auto;
    z-index: 10;
    .loginBox{
      width: 1280px;
      margin: 100px auto;
      .leftImg{
        width: 440px;
        height: 744px;
        float: left;
        opacity:0.5;
        background-color: rgba(0,0,0,.5);
        overflow: hidden;
        position: relative;
      }
      .loginInfo{
        position: relative;
        width: 840px;
        height: 744px;
        opacity:0.6;
        background-color: #fff ;
        float: left;
        .infoBox{
          position: relative;
          top:250px;
          left:170px;
          width: 500px;
          padding: 0 50px;
          .formItem{
            margin-bottom: 30px;
            .imgHead{
              display: inline-block;
              position: relative;
              top:8px;
              right:8px;
            }
          }
          .loginB{
            width: 200px;
            font-weight: 900;
          }
        }
        .registerB{
          border: none;
          position: relative;
          top: 500px;
          color: #8ac4ff;

        }
        .forgetB{
          border: none;
          position: relative;
          top: 500px;
          color: #8ac4ff;

        }
      }
    }
  }
 </style>
<style lang="scss">
  .ivu-input-wrapper{
    width: 90% !important;
  }
</style>
