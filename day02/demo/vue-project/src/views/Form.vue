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
    证件类型：
    <input type="radio" value="sfz" v-model="form.card"> 身份证
    <input type="radio" value="jgz" v-model="form.card"> 军官证
    <input type="radio" value="sbk" v-model="form.card"> 社保卡
    <input type="radio" value="jz" v-model="form.card"> 驾照
    
    <hr>
    选择行业：
    <input type="checkbox" value="jy" v-model="form.hy"> 教育
    <input type="checkbox" value="yl" v-model="form.hy"> 医疗
    <input type="checkbox" value="jr" v-model="form.hy"> 金融
    <input type="checkbox" value="zmt" v-model="form.hy"> 自媒体
    
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
          phone: '',
          card: 'sfz',
          hy: []
        }
      }
    },
    methods: {
      /** 点击按钮后执行该方法，提交表单收集的数据 */
      submit() {
        console.log(this.form)
        // 做表单验证，基于正则表达式  验证账号：[3-10]的单词字符
        let exp = /^\w{3,10}$/;
        if(exp.test(this.form.name)){ // 验证通过
          alert('账号验证通过')
        }else {
          alert('账号格式不正确，要求[3-10]单词字符')
        }
      }
    },

    /** watch监听器 */
    watch: {
      // 监听form.phone，一旦该属性有变化，则执行该监听方法
      // 传入的参数：newValue新值, oldValue旧值
      'form.phone': (newValue, oldValue) => {
        console.log(`form.phone从${oldValue}变成了${newValue}`)
        // 验证phone的值是否符合要求：
        if(newValue.length==11){
          let exp = /^1[3-9]\d{9}$/;
          if(exp.test(newValue)){
            console.log('手机号格式正确')
          }else {
            console.error('手机号格式错误')
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>