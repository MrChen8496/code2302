<template>
  <div>
    <!-- 首页的内容 -->
    <!-- 标题栏 -->
    <van-nav-bar title="百慕大影城">
      <template #right>
        <van-icon name="apps-o" size="22"/>
      </template>
    </van-nav-bar>
    <!-- 广告Header -->
    <!-- <AppHeader></AppHeader> -->
    <app-header></app-header>

    <van-sticky>
      <!-- 导航条 -->
      <div class="nav" style="background-color:#fff;">
        <span>北京</span>
        <b></b>
        <!-- tabs -->
        <van-tabs 
          color="#f03d37" 
          class="tabs" 
          v-model:active="activeName">
          <van-tab title="热映" name="1"></van-tab>
          <van-tab title="待映" name="2"></van-tab>
          <van-tab title="经典" name="3"></van-tab>
        </van-tabs>
        <van-icon name="search" />
      </div>
    </van-sticky>

    <!-- 加载电影列表 -->
    <movie-item 
      :movie="item"
      v-for="item in movies" :key="item.id">
    </movie-item>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import httpApi from '@/http/index'
import Movie from '@/types/Movie' 

/** 处理顶部导航的选中项 */
const activeName = ref('1')

/** 处理组件挂载完毕后，加载首页热映列表 */
const movies = ref<Movie[]>([])
onMounted(()=>{
  console.log('mounted')
  // 通过类别ID  cid=1  查询电影列表
  let params = {cid:1, page:1, pagesize:20}
  httpApi.movieApi.queryByCategoryId(params).then(res=>{
    console.log(res)
    // 为movies赋值即可
    movies.value = res.data.data.result
  })
})


</script>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  padding: 0px 15px;
  border-bottom: 1px solid #eee;

  b {
    border: 4px solid transparent;
    border-top-color: black;
    margin: 8px 0px 0px 4px;
  }

  .tabs {
    flex: 1;
    margin: 0px 20px;
  }

  i {
    font-weight: bold;
    font-size: 24px;
    color: #f03d37;
  }
  
}

</style>
