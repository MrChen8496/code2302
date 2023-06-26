<template>
    <div class="container">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="娜美国际影城（通州店）" left-arrow></van-nav-bar>

      <!-- 广告 -->
      <app-header></app-header>

      <!-- 电影院信息描述 -->
      <div class="desc">
        <div class="left">
          <p class="t">娜美国际影城（通州店）</p>
          <p class="b">通州区六和桥西甲壹号（免费停车）</p>
        </div>
        <van-icon name="location-o" size="25" color="#53a7ff"/>
      </div>
      
      <!-- 电影详细描述 -->
      <!-- <movie-desc></movie-desc> -->

      <!-- 顶部时间导航条 -->
      <van-sticky>
        <van-tabs v-model:active="activeDate" swipe-threshold="1" line-width="80px">
          <van-tab name="2022-10-06" title="周一 10月06日"></van-tab>
          <van-tab name="2022-10-07" title="周二 10月07日"></van-tab>
          <van-tab name="2022-10-08" title="周三 10月08日"></van-tab>
          <van-tab name="2022-10-08" title="周三 10月08日"></van-tab>
          <van-tab name="2022-10-08" title="周三 10月08日"></van-tab>
          <van-tab name="2022-10-08" title="周三 10月08日"></van-tab>
        </van-tabs>
      </van-sticky>

      <!-- 排期列表项 -->
      <div class="plan-item" @click="$router.push('/seat-selection')">
        <div class="time">
          <p class="t">13:00</p>
          <p class="b">15:17散场</p>
        </div>
        <div class="info">
          <p class="t">一号厅</p>
          <p class="b">4K厅</p>
        </div>
        <div class="price">
          ￥40.9
        </div>
        <span>折扣</span>
        <div class="btn-buy">购票</div>
      </div>
      

    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from 'vue'
const activeDate = ref('2022-10-06')
</script>

<style scoped>
.desc {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
}
.desc .left {
  flex: 1;
}
.desc .left .t {
  font-size: 1.2em;
  font-weight: bold;
}
.desc .left .b {
  font-size: 12px;
  margin-top: 5px;
  color: #999;
}

.plan-item {
  display: flex;
  padding: 20px 10px;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.plan-item .time .t {
  font-size: 1.1em;
  font-weight: bold;
}
.plan-item .time .b {
  font-size: 12px;
  color: #aaa;
  margin-top: 5px;
}
.plan-item .info {
  flex: 1;
  margin-left: 15px;
}
.plan-item .info .t {
  font-size: 14px;
}
.plan-item .info .b {
  font-size: 12px;
  margin-top: 5px;
  color: #aaa;
}
.plan-item .price {
  color: #f03d37;
  font-size: 1.1em;
}
.plan-item span{
  font-size: 12px;
  margin: 0px 20px 0px 3px;
  background-color: #ff9900;
  color: white;
  padding: 0px 3px;
  transform: scale(0.9);
}

.plan-item .btn-buy {
  display: inline-block;
  padding: 5px 10px;
  border:1px solid #f03d37;
  color: #f03d37;
  font-size: 12px;
  border-radius: 50px;
}
</style>