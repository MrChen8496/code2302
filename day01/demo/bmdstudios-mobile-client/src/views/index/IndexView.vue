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
      <b></b>
      <!-- tabs -->
      <van-tabs class="tabs" v-model:active="activeName">
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

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  padding: 0px 15px;
  border-bottom: 1px solid #eee;

  b {
    display: block;
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
