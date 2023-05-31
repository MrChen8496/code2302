<template>
  <div class="counter">
    <!-- src/components/Counter.vue -->
    <button @click="n--">-</button>
    <span>{{n}}</span>
    <button @click="n++">+</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        n: 5
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