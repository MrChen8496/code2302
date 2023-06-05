<template>
  <div>
    <!-- 水平导航菜单 -->
    <el-menu mode="horizontal" :default-active="active">
      <el-menu-item index="1">产品</el-menu-item>
      <el-submenu index="2">
        <!-- template为虚拟标签  不会输出DOM元素 -->
        <template slot="title">解决方案</template>
        <el-menu-item index="2-1">物流</el-menu-item>
        <el-menu-item index="2-2">出行</el-menu-item>
        <el-menu-item index="2-3">O2O</el-menu-item>
        <el-menu-item index="2-4">共享单车</el-menu-item>
        <el-menu-item index="2-5">运动健康</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">开发文档</el-menu-item>
      <el-menu-item index="4">客户案例</el-menu-item>
      <el-menu-item index="5">生态合作</el-menu-item>
    </el-menu>

    <!-- 垂直菜单 -->
    <el-menu 
      style="width: 250px;" 
      :default-active="active"
      active-text-color="#f00">

      <el-menu-item index="1">产品</el-menu-item>
      
      <el-submenu index="2">
        <!-- template为虚拟标签  不会输出DOM元素 -->
        <template slot="title">解决方案</template>
        <el-menu-item index="2-1">物流</el-menu-item>
        <el-menu-item index="2-2">出行</el-menu-item>
        <el-menu-item index="2-3">O2O</el-menu-item>
        <el-menu-item index="2-4">共享单车</el-menu-item>
        <el-menu-item index="2-5">运动健康</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">开发文档</el-menu-item>
      <el-menu-item index="4">客户案例</el-menu-item>
      <el-menu-item index="5">生态合作</el-menu-item>
    </el-menu>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        active: '3'
      }
    },
  }
</script>

<style>
.el-submenu__title {
  height: 50px;
  line-height: 50px;
}
</style>

<style lang="scss" scoped>
.sidemenu {
  width: 230px;
}
.el-menu-item {
  height: 50px;
  line-height: 50px;
}
/*
.el-menu-item.is-active {
  color: red;
}
 */
</style>