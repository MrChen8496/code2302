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

    <!-- 导航条 -->
    <div class="nav">
      <span>北京</span>
      <i></i>
      <!-- tabs -->
      <van-tabs v-model:active="activeName">
        <van-tab title="热映" name="1"></van-tab>
        <van-tab title="待映" name="2"></van-tab>
        <van-tab title="经典" name="3"></van-tab>
      </van-tabs>
      <van-icon name="search" />

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const activeName = ref('1')
</script>

<style scoped>

</style>