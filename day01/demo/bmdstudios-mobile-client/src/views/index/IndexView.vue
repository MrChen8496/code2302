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
          v-model:active="activeName" @click-tab="clickTab">
          <van-tab title="热映" name="1"></van-tab>
          <van-tab title="待映" name="2"></van-tab>
          <van-tab title="经典" name="3"></van-tab>
        </van-tabs>
        <van-icon name="search" />
      </div>
    </van-sticky>

    <!-- 加载电影列表 -->
    <van-pull-refresh 
      success-text="加载完成"
      :success-duration="1500"
      v-model="refreshing" 
      @refresh="onRefresh">
      <van-list
        v-if="movies && movies.length>0"
        v-model:loading="loading"
        :finished="finished"
        finished-text="我是有底线的"
        @load="onLoad">

        <movie-item 
          :movie="item"
          @click="$router.push(`/movie-detail/${item.id}`)" 
          v-for="item in movies" :key="item.id">
        </movie-item>

      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onActivated, onDeactivated } from 'vue'
import httpApi from '@/http/index'
import Movie from '@/types/Movie' 
import Storage from '@/utils/Storage'

onActivated(()=>{ console.log('Index被激活') })
onDeactivated(()=>{ console.log('Index失活') })

/** 处理列表相关业务 */ 
const loading = ref(false)
const finished = ref(false)

// 当List组件发现触底后，自动调用onLoad方法，并且将loading设置为true
// 计算下一页的页码：
// 当前数组的长度    每页条目数    下一页的页码
//      20               20           2
//      40               20           3
//      80               20           5
//      n                20           ?  (n/20)+1
function onLoad(){
  console.log('触底加载...onLoad...')
  // 向服务端发请求，获取当前类别下的下一页数据
  let params = { 
    cid: parseInt(activeName.value),
    page:Math.ceil((movies.value.length/20)) + 1, 
    pagesize:20 
  }
  // 发请求
  httpApi.movieApi.queryByCategoryId(params).then(res=>{
    console.log('加载下一页', res)
    // 将服务端返回的电影列表，追加到当前电影列表的末尾
    movies.value.push(...res.data.data.result)
    // 将loading改为false
    loading.value = false
    // 判断是否已经到底，如果到底，需要修改finished变量为true
    if(movies.value.length == res.data.data.total){
      finished.value = true
    }
  })

}

/** 处理下拉刷新业务 
 *  当下拉刷新被触发时，将会执行onRefresh，且自动将refreshing设置true
 */
const refreshing = ref(false)
function onRefresh(){
  console.log('下拉刷新...onRefresh()...')
  // 发送请求，加载当前类别下的首页数据
  let params = {
    cid: parseInt(activeName.value),
    page: 1, 
    pagesize: 20
  }
  httpApi.movieApi.queryByCategoryId(params).then(res=>{
    console.log(res)
    // 首页数据加载完毕  更新refreshing变量
    refreshing.value = false
    // 更新当前列表
    movies.value = res.data.data.result
    // 更新缓存
    Storage.set(activeName.value, movies.value)
  })
}

/** 处理顶部导航的选中项 */
const activeName = ref('1')

function clickTab(e:any){
  console.log(e)
  finished.value = false  // 重置finished变量
  console.log({x:window.scrollX, y:window.scrollY})
  if(window.scrollY > 106){
    window.scrollTo(0, 106)
  }

  let cid = e.name
  // 请求之前先判断，Storage缓存中是否已经存储了当前类别下的首页数据
  // 如果有，则直接拿来使用即可。
  let data = Storage.get(cid)
  if(data){
    movies.value = data
    return;
  }

  // 发送请求，加载当前选中的cid类别下 的电影列表
  let params = {cid, page:1, pagesize:20}
  httpApi.movieApi.queryByCategoryId(params).then(res=>{
    console.log('更改类别后', res)
    // 更新列表
    movies.value = res.data.data.result
    
    // 不仅要更新列表，还要将列表数据存入缓存  Storage
    Storage.set(cid, movies.value);
  })
}



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
