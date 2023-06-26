<template>
    <div class="container">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="疯狂动物城" left-arrow></van-nav-bar>

      <!-- 广告 -->
      <app-header></app-header>

      <!-- 电影详细描述 -->
      <movie-desc v-if="movie" :movie="movie"></movie-desc>

      <!-- 顶部时间导航条 momentjs -->
      <van-sticky>
        <van-tabs v-model:active="activeDate" swipe-threshold="1" line-width="80px">
          <van-tab 
            :name="d.format('YYYY-MM-DD')" 
            :title="momentToStr(d)"
            v-for="(d,i) in dates" :key="i">
          </van-tab>
        </van-tabs>
      </van-sticky>

      <!-- 电影院列表项 -->
      <div class="item mb-line-b" 
        v-for="item in cinemas"
        :key="item.id"
        @click="$router.push('/plan-selection')">
        <div class="title-block">
          <div class="title line-ellipsis">{{ item.cinema_name }}</div>
            <div class="location-block">
                <div class="flex line-ellipsis">{{ item.address }}</div>
                <div class="distance"></div>
            </div>
            <div class="label-block">
              <p class="vipTag"
                v-for="tag in item.tags.split(',')"
                :key="tag">
                {{ tag }}
              </p>
            </div>
        </div>
      </div>

    </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted, watch} from 'vue'
import { useRoute } from 'vue-router';
import httpApi from '@/http';
import Movie from '@/types/Movie'
import Cinema from '@/types/Cinema'
import moment from 'moment'

const $route = useRoute()


// 处理时间序列
const now = moment()
console.log(now)
console.log(now.add(5, 'days'))
console.log(now.format('YYYY年 MM月 DD号'))
// 想办法整理出来一个保存了连续7天moment对象的数组
const dates:moment.Moment[] = []
for(let i=0; i<7; i++){
  let n = moment().add(i, 'days')
  dates.push(n)
}
console.log(dates)

// momentToStr()
enum Week {'日', '一', '二', '三', '四', '五', '六'}
function momentToStr(d: moment.Moment){
  let wIndex = d.format('d')  //  => 0,1,2,3,4,5,6
  let weekStr = Week[parseInt(wIndex)]
  return d.format(`周${weekStr} MM月DD日`)
}

// 监听activeDate的改变就可以获取当前选中的时间字符串  发请求即可
const activeDate = ref('2022-10-06')
const cinemas = ref<Cinema[]>()
watch(activeDate, (newVal, oldVal)=>{
  console.log('activeDate改变：', newVal)
  // 带着时间字符串、电影id，发送请求，加载有排期的电影院列表
  let params = {
    movie_id: parseInt(id), 
    showingon_date: newVal
  }
  httpApi.cinemaApi.queryByMovieIdAndDate(params).then(res=>{
    console.log('查到的影院列表', res)
    // 将响应数据交给代理，在template中v-for遍历渲染
    cinemas.value = res.data.data
  })
})

// 通过电影ID，加载电影信息并显示 
const id = $route.query.id as string
const movie = ref<Movie>()
onMounted(()=>{
  httpApi.movieApi.queryById({id}).then(res=>{
    console.log(res)
    // 将res.data.data传给组件MovieDesc，显示电影基本信息 
    movie.value = res.data.data
  })
})


</script>

<style scoped>
.buyblock {
  padding:10px; 
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}

.container{
  background-color: #f5f5f5;
}
.movie-detail {
  overflow: hidden;
  z-index: 1;
  height: 188px;
  position: relative;
  cursor: pointer;
}
.movie-detail .movie-filter {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  background-color: #333;
}
.poster-background{
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  position: absolute;
  -webkit-filter: blur(1.2rem);
  filter: blur(1.2rem);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: .55;
}
.movie-detail .detail {
  height: 150px;
  padding: 19px 30px 19px 15px;
}
.movie-detail .detail {
  display: flex;
  height: 150px;
  padding: 19px 30px 19px 15px;
}
.movie-detail .detail .poster img {
  width: 110px;
  height: 150px;
  box-sizing: border-box;
}
.movie-detail .detail .content {
  flex:1;
  overflow-x: hidden;
  margin-left: 12.5px;
  line-height: 1;
  color: #fff;
}
.movie-detail .detail .content .title {
  font-size: 20px;
  margin-top: 2px;
  font-weight: 700;
  overflow: hidden;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.movie-detail .detail .content .score {
  font-size: 18px;
  font-weight: 700;
  color: #fc0;
  margin-top: 17px;
}
.movie-detail .detail .content .type {
  margin-top: 17px;
  font-size: 12px;
  color: #fff;
  opacity: .8;
}


.mb-line-b {
  padding: 10px;
  background: #fff;
  border-bottom: 1px solid #eee;
}
.title-block {
  line-height: 1.5;
}
.title {
  height: 23px;
  line-height: 23px;
  font-size: 16px;
  color: #000;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.location-block {
  display: flex;
  margin-top: 6px;
  font-size: 13px;
  color: #666;
}
.flex {
  -webkit-box-flex: 1;
  flex: 1;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.distance {
  margin-left: 5px;
}
.label-block {
  height: 24px;
  line-height: 22px;
  margin-top: 4px;
  margin-bottom: 4px;
  overflow: hidden;
}
.label-block p {
  position: relative;
  display: inline-block;
  padding: 3px;
  height: 13px;
  line-height: 15px;
  border-radius: 2px;
  font-size: 12px;
  margin-right:5px;
}
.allowRefund, .endorse,.hallType{
  color: #589daf;
  border: 1px solid #589daf;
}
.vipTag,.snack {
  color: #f90;
  border: 1px solid #f90;
}
</style>