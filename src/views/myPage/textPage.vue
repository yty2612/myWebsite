<template>
  <div @click="testFu">2022022810.31</div>
</template>

<script>
  export default {
    name: "textPage",
    data(){
      return{

      }
    },
    methods:{
      testFu(){
        let aee= [1,2,3,1,1,5,4,999];
        for(let i=0;i<aee.length-1;i++){
          for(let j=i+1;j<aee.length;j++){
            if(aee[i]>aee[j]){
              [aee[i],aee[j]]=[aee[j],aee[i]]
            }
          }
        }
        console.log(aee);
      }
    }
  }
</script>

<style scoped>

</style>