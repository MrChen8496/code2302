<template>
  <div>
    <!-- Table.vue -->
    <h2>Form.vue表单 注册页面</h2>
    <br>    
    <el-form 
      :model="form" 
      :rules="rules"
      label-width="80px" style="width:600px">  
      <el-form-item label="账号" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="form.pwd" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="pwd2">
        <el-input v-model="form.pwd2" show-password></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
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
      },
      rules: {    // 定义验证规则
        name: [
          {required:true, message:'该字段必填', trigger:"blur"},
        ],
        pwd: [
          {required:true, message:'该字段必填', trigger:"blur"},
        ],
        pwd2: [
          {required:true, message:'该字段必填', trigger:"blur"},
        ],
        phone: [
          {required:true, message:'该字段必填', trigger:"blur"},
        ],
      }
    }
  },

  methods: {
    //提交表单
    submit() {
      console.log(this.form)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>