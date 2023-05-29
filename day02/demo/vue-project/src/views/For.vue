<template>
  <div>
    <h1>测试v-for指令</h1>

    <hr>
    <h3>遍历字符串数组</h3>
    <p v-for="item in names" :key="item">《 {{item}} 》</p>
    
    <h3>遍历输出京东导航条</h3>
    <div class="tabs">
      <div v-for="item in tabs" :key="item">{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: ['京东超市', '秒杀', '京东家电', '京东生鲜', '拍卖', '便宜包邮'],
        names: ['这个杀手不太冷', '功夫', '功夫熊猫', '灌篮高手']
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