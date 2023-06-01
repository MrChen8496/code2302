<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cart">购物车</router-link> |
      <a href="/cart">购物车链接</a> |
      <router-link :to="{path:'/cart'}">去购物车</router-link> |
      <router-link :to="{name:'for'}">去v-for</router-link> |
      <router-link :to="{name:'movie-list'}">查看电影列表</router-link> |
      <button @click="toLogin">跳转到登录</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {  // 点击按钮，跳转到登录页面
      this.$router.push('/login')
      // this.$router.replace('/login')
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
