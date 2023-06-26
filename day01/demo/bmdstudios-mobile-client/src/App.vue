<template>
  <!-- <router-view/> -->
  <!-- 使用KeepAlive缓存组件实例 -->
  <!-- Component表示的就是当前正在显示的路由组件 -->
  <router-view v-slot="{Component}">
    <keep-alive>
      <component v-if="$route.meta.keepAlive" :is="Component" />
    </keep-alive>
    <component v-if="!$route.meta.keepAlive" :is="Component" />
  </router-view>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

/** 重写导航样式 */
:root:root {
  --van-nav-bar-background: #f03d37;
  --van-nav-bar-title-text-color: #fff;
  --van-nav-bar-icon-color: #fff;
}
</style>
