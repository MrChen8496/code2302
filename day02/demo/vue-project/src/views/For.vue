<template>
  <div v-if='1'>
    <h1 v-for="item in 2" :key="item">测试v-for指令</h1>

    <hr>
    <h3>遍历字符串数组</h3>
    <p v-for="item,i in names" :key="item">{{i+1}}.《 {{item}} 》</p>
    
    <h3>遍历输出京东导航条</h3>
    <div class="tabs">
      <div v-for="item in tabs" :key="item">{{item}}</div>
    </div>
    <hr>
    <h3>遍历电影对象数组</h3>
    <p v-for="item in movies" :key="item.id">
      ID：{{item.id}} &nbsp;&nbsp;|&nbsp;&nbsp;
      名称：《{{item.name}}》 &nbsp;&nbsp;|&nbsp;&nbsp;
      {{item.duration}}分钟  &nbsp;&nbsp;|&nbsp;&nbsp;
      {{item.showingon}}上映 
    </p>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: ['京东超市', '秒杀', '京东家电', '京东生鲜', '拍卖', '便宜包邮'],
        names: ['这个杀手不太冷', '功夫', '功夫熊猫', '灌篮高手'],
        movies: [
          {id:1, name:'杀手', duration:114, showingon: '05-02'},
          {id:2, name:'功夫', duration:124, showingon: '06-06'},
          {id:3, name:'功夫熊猫', duration:125, showingon: '08-22'},
          {id:4, name:'灌篮高手', duration:143, showingon: '01-12'}
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  height: 50px;
  justify-content: center;
  div {
    padding: 10px 20px;  
  }
}
</style>