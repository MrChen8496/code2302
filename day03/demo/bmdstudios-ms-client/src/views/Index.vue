<template>
  <div>
    <!-- 显示echarts图表 -->
    <div id="chart1"></div>
    <div id="chart2"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      categoryData: {
        title: '不同类别下电影数量分布图',
        cats: ['悬疑', '爱情', '动漫', '动作', '科幻', '冒险'],
        counts: [135, 67, 44, 87, 93, 112]
      }
    }
  },

  mounted () {
    this.initChart1(); // 初始化第一个图表
    this.initChart2();
  },
  
  methods: {
    initChart2(){
      var myChart = echarts.init(document.getElementById('chart2'));
      let option = {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      myChart.setOption(option)
    },


    initChart1() { // 初始化第一个图表
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('chart1'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: this.categoryData.title
        },
        tooltip: {},
        xAxis: {
          data: this.categoryData.cats
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: this.categoryData.counts
          }
        ]
      });

    }
  },
};
</script>

<style lang="scss" scoped>
#chart1 {
  width: 45%;
  height: 300px;
}
#chart2 {
  width: 45%;
  height: 300px;
}
</style>