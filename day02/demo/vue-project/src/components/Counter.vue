<template>
  <div class="counter">
    <!-- src/components/Counter.vue -->
    <button :disabled="n==min" @click="n--">-</button>
    <span>{{n}}</span>
    <button :disabled="n==max" @click="n++">+</button>
  </div>
</template>

<script>
  export default {
    // 声明自定义属性
    props: {
      value: {
        type: Number,
        default: 5
      },
      min: {
        type: Number,
        default: 1
      },
      max: {
        type: Number,
        default: 10
      },
    },

    data() {
      return {
        n: this.value
      }
    },
  }
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
  width: 90px;
  border: 1px solid #ddd;
  button {
    width: 25px;
    height: 25px;
    border: none;
  }
  span {
    width: 40px;
  }
}
</style>