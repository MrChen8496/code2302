<template>
  <div>
    <h1>测试v-for指令</h1>

    <hr>
    <h3>遍历字符串数组</h3>
    <p v-for="item in names" :key="item">《 {{item}} 》</p>
    
    <h3>遍历输出京东导航条</h3>
    <div class="tabs">
      <div>京东超市</div>
      <div>秒杀</div>
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

</style>