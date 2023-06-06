<template>
  <div>
    <!-- 显示echarts图表 -->
    <div id="chart1"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  mounted () {
    this.initChart1(); // 初始化第一个图表
  },
  methods: {
    initChart1() { // 初始化第一个图表

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart1'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });

    }
  },
};
</script>

<style lang="scss" scoped>
#chart1 {
  width: 35%;
  height: 280px;
}
</style>