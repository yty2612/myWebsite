/**
 * @description echarts图表配置对象，便于实例化一个echart对象时带上默认值
 * @return {object}
 */
window.echartConfig = {
  theme: 'dark',              //设计稿主题：dark - 暗黑款式，其他款式需单独引入JSON文件或直接在实例化中配置，比较流行风格如：（vintage、macarons、infographic、shine、roma）
  params: {},                 //图表默认参数
  url: '',                    //图表默认接口地址
  data: {},                   //图表默认演示数据

  //设计稿样式
  titleColor: '#0F84F8',      //标题颜色
  titleFontSize: 18,          //标题字体大小
  titleFontWeight: 500,       //标题字体粗细
  titleX: '0',                //标题的水平位置
  titleY: '',                 //标题的垂直位置
  subTitleColor: '#6577C3',   //副标题颜色
  subTitleFontSize: 14,       //副标题字体大小
  legendType: 'plain',        //图例类型，'plain'：普通图例
  legendColor: '#ffffff',     //图例颜色
  legendFontSize: 12,         //图例字体大小
  legendX: 'center',          //图例的水平位置
  legendY: '',                //图例的垂直位置
  legendOrient: 'horizontal', //图例朝向
}
