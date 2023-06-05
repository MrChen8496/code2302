<template>
  <div>
    
    <h2>Container 布局容器</h2>

    <!-- views/Container.vue -->
    <el-container>
      <el-header style="background:#409EFF;"></el-header>      
      <el-container>
        <el-aside style="background:#67C23A;"></el-aside>
        <el-container>
          <el-main style="background:#E6A23C;"></el-main>
          <el-footer style="background:#909399;"></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>