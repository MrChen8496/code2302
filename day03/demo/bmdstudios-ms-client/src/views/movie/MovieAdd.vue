<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      <el-breadcrumb-item>新增电影</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分隔线 -->
    <el-divider></el-divider>

    <!-- 表单 -->
    <el-form label-width="100px" style="width:600px">
      <el-form-item label="封面图片"></el-form-item>
      <el-form-item label="电影类别">
        <el-radio-group>
          <el-radio label="1">热映</el-radio>
          <el-radio label="2">待映</el-radio>
          <el-radio label="3">经典</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电影名称">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="电影类型">
        <el-select>
          <el-option label="111" value="1"></el-option>
          <el-option label="222" value="2"></el-option>
          <el-option label="333" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电影主演"></el-form-item>
      <el-form-item label="上映时间">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="电影评分">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="电影时长">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="电影简介">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>