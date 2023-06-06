<template>
  <div>
    <!-- views/actor/ActorList.vue -->

    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>演员管理</el-breadcrumb-item>
      <el-breadcrumb-item>演员列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分隔线 -->
    <el-divider></el-divider>

    <!-- 表单 -->
    姓名：
    <el-input placeholder="姓名关键字" style="width:200px;"></el-input> 
    &nbsp;
    <el-button type="primary">查询</el-button>
    <el-divider content-position="left">列表数据</el-divider>

    <!-- 展示演员列表数据 -->
    <person name="亮亮" avatar="https://p0.pipi.cn/basicdata/25bfd6d753706dd7c3cf3e4348f18898a9954.jpg?imageView2/1/w/128/h/170"></person>

  </div>
</template>

<script>
import Person from "@/components/Person.vue"

export default {
  components: { Person },

};
</script>

<style lang="scss" scoped>
</style>