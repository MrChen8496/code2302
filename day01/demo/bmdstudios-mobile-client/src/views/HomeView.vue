<template>
  <div>
    <!-- 二级路由占位符 -->
    <router-view />

    <!-- 底部选项卡 -->
    <van-tabbar 
      route
      v-model="active" 
      active-color="#f03d37">
      <van-tabbar-item replace to="/home/index">
        首页
        <template #icon="props">
          <img :src="require(`../assets/tabs/index_${
            props.active? '1' : '0'
          }.png`)" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/video">
        视频
        <template #icon="props">
          <img v-show="props.active" src="/tabs/video_1.png" alt="">
          <img v-show="!props.active" src="../assets/tabs/video_0.png" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/show">
        演出
        <template #icon="props">
          <img v-show="props.active" src="../assets/tabs/show_1.png" alt="">
          <img v-show="!props.active" src="../assets/tabs/show_0.png" alt="">
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/home/me">
        我的
        <template #icon="props">
          <img v-show="props.active" src="../assets/tabs/me_1.png" alt="">
          <img v-show="!props.active" src="../assets/tabs/me_0.png" alt="">
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const active = ref(0)

</script>

<style scoped>

</style>