<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      <el-breadcrumb-item>电影列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分隔线 -->
    <el-divider></el-divider>

    <!-- 表单 -->
    电影名称：
    <el-input 
      v-model="name"
      placeholder="电影名称关键字" style="width:200px;"></el-input> 
    &nbsp;
    <el-button type="primary">查询</el-button>
    <el-divider content-position="left">列表数据</el-divider>

    <!-- 表格 -->
    <el-table>
      <el-table-column label="封面"></el-table-column>
      <el-table-column label="标题"></el-table-column>
      <el-table-column label="主演"></el-table-column>
      <el-table-column label="上映时间"></el-table-column>
      <el-table-column label="时长"></el-table-column>
      <el-table-column label="所属类别"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      style="margin:20px;"
      layout="->, total, prev, pager, next, jumper"
      :current-page="1"
      :total="200"
      :page-size="10">
    </el-pagination>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>