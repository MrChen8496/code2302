<template>
  <div>
    <!-- Actors.vue -->
    <h3>演员列表</h3>
    <button @click="listActors">加载演员列表</button>
    <hr>
  </div>
</template>

<script>
  import myaxios from '../http/MyAxios'

  export default {

    methods: {
      /** 加载演员列表 */
      listActors() {
        let url = "https://web.codeboy.com/bmdapi/movie-actors"
        let params = {page:1, pagesize:100}
        myaxios.get(url, params).then(res=>{
          console.log('演员列表', res)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>