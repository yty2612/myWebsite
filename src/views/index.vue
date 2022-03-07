<template>
  <div class="indexBox">
    <div class="appearance">
      <div id="appearanceId" class="echartTest"></div>
      <div id="2" class="echartTest"></div>
      <div id="3" class="echartTest"></div>
      <div id="4" class="echartTest"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    components:{
    },
    data(){
      return{
        appearanceConfig:{
          title: {
            text: '颜值统计表',
          },
          legend: {},
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:"颜值",
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'bar',
              smooth: true
            }
          ]
        },
        configA:{
          title: {
            text: '体力统计表',
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              smooth: true
            }
          ]
        },
        configB:{
          title: {
            text: '智商统计表',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            top: 'bottom',
            data: [
              'rose1',
              'rose2',
              'rose3',
              'rose4',
              'rose5',
              'rose6',
              'rose7',
              'rose8'
            ]
          },
          series: [
            {
              name: 'Radius Mode',
              type: 'pie',
              radius: [20, 140],
              center: ['25%', '50%'],
              roseType: 'radius',
              itemStyle: {
                borderRadius: 5
              },
              label: {
                show: false
              },
              emphasis: {
                label: {
                  show: true
                }
              },
              data: [
                { value: 40, name: 'rose 1' },
                { value: 33, name: 'rose 2' },
                { value: 28, name: 'rose 3' },
                { value: 22, name: 'rose 4' },
                { value: 20, name: 'rose 5' },
                { value: 15, name: 'rose 6' },
                { value: 12, name: 'rose 7' },
                { value: 10, name: 'rose 8' }
              ]
            },
          ]
        },
        configC:{
          backgroundColor:"#ffffff" ,
          title: {
            text: 'JJ长度统计图',
            textStyle: {
              color: '#235894'
            }
          },
          tooltip: {},
          series: [
            {
              name: 'pie',
              type: 'pie',
              selectedMode: 'single',
              selectedOffset: 30,
              clockwise: true,
              label: {
                fontSize: 18,
                color: '#235894'
              },
              labelLine: {
                lineStyle: {
                  color: '#235894'
                }
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
              ],
              itemStyle: {
                opacity: 0.7,
                color:"aqua",
                borderWidth: 3,
                borderColor: '#235894'
              }
            }
          ]
        }
      }
    },
    created(){
     // return new promise((r,j)=>{
     //   this.$fetch[method]("url","data").then(res=>{
     //     if( !res ||res.code!==0){
     //       j("失败")
     //       return
     //     }
     //     r(res)
     //   })
     //  })
    },
    mounted(){
      this.renderMyE()
    },
    methods:{
      renderMyE(){
        //实例化DOM元素
        let myChart = window.$echarts.init(document.getElementById("appearanceId"),)
        let myChartA = window.$echarts.init(document.getElementById("2"),)
        let myChartB = window.$echarts.init(document.getElementById("3"),)
        let myChartC = window.$echarts.init(document.getElementById("4"),)
        myChart.setOption(this.appearanceConfig);
        myChartA.setOption(this.configA)
        myChartB.setOption(this.configB)
        myChartC.setOption(this.configC)
      }
    }
  }
</script>

<style scoped lang="scss">
  .indexBox{
    .appearance{
      .echartTest{
        display: inline-block;
        margin: 0 20px;
        width: 580px;
        height: 400px;
      }
    }

  }
</style>