<template>
  <div>
    <div class="testGrid">
      <div @click="routerJumper">1</div>
      <div @click="noOpenJumper">2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mainPage",
    data(){
      return{

      }

    },
    methods:{
      routerJumper(){
        //新开窗口跳转
        let routeData = this.$router.resolve({path: "/login",query:{name:"0001"}})
        window.open(routeData.href, "_blank")
      },
      noOpenJumper(){
        //不新开窗口跳转
        console.log("不新开窗口跳转");
        this.$router.push("/index")
      }
    }
  }
</script>

<style scoped lang="scss">
  .testGrid{
    display: grid;
    grid-template-columns: repeat(8,100px);
    grid-template-rows:  repeat(3,100px);
    grid-auto-flow: column;
    /*grid-auto-flow: row dense;*/
    /*grid-gap: 50px 50px;*/
  }

</style>