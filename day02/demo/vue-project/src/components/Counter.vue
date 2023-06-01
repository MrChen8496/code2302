<template>
  <div class="counter">
    <!-- src/components/Counter.vue -->

    <!-- 设计一个默认插槽位置 -->
    <slot />
    <button :disabled="n==min" @click="n-=step">-</button>
    <span>
      <slot name="label"/>
      {{n}}
      <slot name="unit"/>
    </span>
    <button :disabled="n==max" @click="n+=step">+</button>
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
      step: {
        type: Number,
        default: 1
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
  button {
    width: 25px;
    height: 25px;
    border: none;
  }
  span {
    min-width: 40px;
  }
}
</style>