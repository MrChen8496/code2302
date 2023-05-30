<template>
  <div>
    <h1>Form.vue,测试表单与v-model</h1>
    <hr>
    用户账号：<input v-model="form.name" type="text">
    <hr>
    用户密码：<input v-model="form.pwd" type="password">
    <hr>
    确认密码：<input v-model="form.pwd2" type="password">
    <hr>
    用户手机：<input v-model="form.phone" type="text">
    <hr>
    <button @click="submit">提交注册信息</button>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {  // 收集整个表单的数据
          name: '',
          pwd: '',
          pwd2: '',
          phone: ''
        }
      }
    },
    methods: {
      submit() {
        console.log(this.form)
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>