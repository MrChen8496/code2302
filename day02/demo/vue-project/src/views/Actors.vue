<template>
  <div>
    <!-- Actors.vue -->
    <h3>演员列表</h3>
    <button @click="listActors">加载演员列表</button>
    <hr>
    
    <person 
      v-for="item in actors" :key="item.id"
      :name="item.actor_name" :avatar="item.actor_avatar">
    </person>

    <!-- <person></person>
    <abc></abc>
    <PersonInfo></PersonInfo>
    <person-info></person-info> -->

    <!-- 加载演员列表项 -->
    <!-- <div 
      class="person" 
      v-for="item in actors" 
      :key="item.id">
      <img :src="item.actor_avatar" alt="">
      <span>{{item.actor_name}}</span>
    </div> -->

    <h3>导演列表</h3>
    <button @click="listDirectors">加载导演列表</button>
    <hr>
    <person
      v-for="item in directors" :key="item.id"
      :name="item.director_name" :avatar="item.director_avatar">
    </person>

    <!-- <person :avatar="123"></person> -->

  </div>
</template>

<script>
  import Person from '@/components/Person.vue'
  import myaxios from '../http/MyAxios'

  export default {
    components: { 
      // 属性名就是自定义标签名 :   属性值引用了Person对象
      Person : Person,
      abc : Person,
      PersonInfo: Person,
    },
    data() {
      return {
        // 保存所有的演员 [{id:1, actor_name:'', actor_avatar:''}]
        actors: [], 
        // 保存所有导演
        directors: [],  
      }
    },
    methods: {
      /** 加载导演列表 */
      listDirectors(){
        let url = "https://web.codeboy.com/bmdapi/movie-directors"
        let params = {page:1, pagesize:10}
        myaxios.get(url, params).then(res=>{
          console.log('导演列表', res)
          // res.data.data 中保存了导演数组
          this.directors = res.data.data
        })
      },

      /** 加载演员列表 */
      listActors() {
        let url = "https://web.codeboy.com/bmdapi/movie-actors"
        let params = {page:1, pagesize:10}
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
    display: block;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>