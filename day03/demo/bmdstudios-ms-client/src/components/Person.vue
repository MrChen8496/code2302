<template>
  <div class="person">
    <img :src="avatar" alt="">
    <span>{{name}}</span>
    <i class="el-icon-error" @click="clickx"></i>
  </div>
</template>

<script>
  export default { 
    // props选项用于定义当前组件的自定义属性 avatar name
    // 一旦定义了这些属性，则在使用当前组件时，就可以传参
    // <person avatar="a.jpg" name='张三' ></person>
    // <person avatar="b.jpg" name='李四' ></person>
    // <person avatar="c.jpg" name='王五' ></person>
    // <person avatar="d.jpg" name='赵六' ></person>
    // props: ['avatar', 'name']
    props: {
      name: {
        type: String,
        default: '姓名'
      },
      avatar: {
        type: String,
        required: true
      }
    },
    methods: {
      /** 叉子被点击了，触发事件执行该方法 */
      clickx() {
        // 此处是无法直接发送删除请求的，可以直接抛出自定义事件
        this.$emit('delete', {names:['张三','张三'], age:[25, 24]})
      }
    },
  }
</script>

<style lang="scss" scoped>
.person:hover i {
  display: block;
}
.person {
  width: 80px;
  height: 130px;
  display: inline-block;
  margin: 0px 10px 10px 0px;
  text-align: center;
  position: relative;

  i {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 1.2em;
    display: none;
  }
  img {
    width: 80px;
  }
  span {
    font-size: 0.9em;
    display: block;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>