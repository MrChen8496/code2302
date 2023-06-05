<template>
  <div>
    <!-- Table.vue -->
    <h2>Form.vue表单 注册页面</h2>
    <br>    
    <el-form :model="form" label-width="80px" style="width:600px">  
      <el-form-item label="账号">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="form.pwd2"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
      
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        pwd: '',
        pwd2: '',
        phone: ''
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>