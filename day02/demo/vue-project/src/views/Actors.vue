<template>
  <div>
    <!-- Actors.vue -->
    <h3>演员列表</h3>
    <button @click="listActors">加载演员列表</button>
    <hr>

    <!-- 加载演员列表项 -->
    <div 
      class="person" 
      v-for="item in actors" 
      :key="item.id">
      <img :src="item.actor_avatar" alt="">
      <span>{{item.actor_name}}</span>
    </div>

  </div>
</template>

<script>
  import myaxios from '../http/MyAxios'

  export default {
    data() {
      return {
        // 保存所有的演员 [{id:1, actor_name:'', actor_avatar:''}]
        actors: [], 
      }
    },
    methods: {
      /** 加载演员列表 */
      listActors() {
        let url = "https://web.codeboy.com/bmdapi/movie-actors"
        let params = {page:1, pagesize:100}
        myaxios.get(url, params).then(res=>{
          console.log('演员列表', res)
          // res.data.data 中保存了演员数组
          this.actors = res.data.data
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.person {
  width: 80px;
  height: 130px;
  display: inline-block;
  margin: 0px 10px 10px 0px;
  text-align: center;

  img {
    width: 80px;
  }
  span {
    font-size: 0.9em;
  }
}
</style>