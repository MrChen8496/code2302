<template>
  <div>
    <!-- 显示echarts图表 -->
    <div id="chart1"></div>
    <div id="chart2"></div>
  </div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart,PieChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  BarChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

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
      // 将this.categoryData的数据结构整理成echarts所需要的结构
      // 现在：{cats:['动作', '悬疑']    counts:[123, 86]}
      // 目标：[{name:'动作', value:123}, {name:'悬疑', value:86}]
      let data = []
      for(let i=0; i<this.categoryData.cats.length; i++){
        let cat = this.categoryData.cats[i]
        let count = this.categoryData.counts[i]
        data.push({name:cat, value:count})
      }
      console.log(data)

      var myChart = echarts.init(document.getElementById('chart2'));
      let option = {
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
            data: data,
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