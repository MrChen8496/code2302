<template>
  <div>
    <!-- views/Direct.vue -->
    <h2 v-red>测试自定义指令</h2>
  </div>
</template>

<script>
  export default {

    /** 通过directives声明自定义指令 */
    directives: {
      // 自定义一个v-red指令  
      red: {
        // 当vue检测到元素上包含有v-red指令时，
        // 并且当绑定了v-red指令的dom元素被插入dom树后
        // 将会自动执行inserted方法，传入dom对象
        inserted: (el)=>{
          el.style.color = "red"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>