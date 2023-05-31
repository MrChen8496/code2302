<template>
  <div>
    <!-- views/MovieList.vue -->
    <h2>电影列表</h2>
    <button @click="listMovies">访问电影列表</button>
    &nbsp;&nbsp; | &nbsp;&nbsp;
    <input type="text" v-model="name" placeholder="输入电影名关键字">
    &nbsp;&nbsp; 
    <button @click="listMoviesByName">模糊查询电影列表</button>

    <hr>
    <h1>查询结果</h1>
    <div class="header" style="font-weight:bold;">
      <div class="cover">封面图片</div>
      <div class="title">标题</div>
      <div class="actor">主演</div>
      <div class="showingon">上映时间</div>
      <div class="type">电影类型</div>
      <div class="duration">电影时长</div>
    </div>
    <!-- 表格行 -->
    <div 
      class="header" 
      v-for="item in movies" :key="item.id">
      <div class="cover">
        <img height="80px" :src="item.cover" alt="">
      </div>
      <div class="title">{{item.title}}</div>
      <div class="actor">{{item.star_actor}}</div>
      <div class="showingon">{{item.showingon}}</div>
      <div class="type">{{item.type}}</div>
      <div class="duration">{{item.duration}}分钟</div>
    </div>

    <!-- <p v-for="item in movies" :key="item.id">
      电影名称：《{{item.title}}》
    </p> -->
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        name: '',   // 绑定电影名称关键字
        movies: [],  // 初始化数组，保存需要显示的电影数组
      }
    },
    methods: {

      /** 通过电影名关键字，模糊查询电影列表 */
      listMoviesByName(){
        let instance = axios.create()
        instance({
          url: 'https://web.codeboy.com/bmdapi/movie-infos/name',
          method: 'POST',
          data: `page=1&pagesize=20&name=${this.name}`,
          // data: {page:1, pagesize:20, name:this.name} 
        }).then(res=>{
          console.log('模糊查询结果：', res)
          this.movies = res.data.data.result
        })
      },

      /** 加载电影列表 */
      listMovies() {
        let instance = axios.create()
        instance({
          url: 'https://web.codeboy.com/bmdapi/movie-infos',
          method: 'GET',
          params: {page:1, pagesize:20}
        }).then(res=>{
          console.log('请求结果：', res)
          this.movies = res.data.data.result
        }).catch(err=>{
          console.warn(err)
        })
      }
    },
  }
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    width: 80%;
    margin: 0px auto;
    padding: 10px 0px;
    align-items: center;
    border-bottom: 1px solid #ccc;

    .cover { width: 150px; }
    .title { flex: 1; }
    .actor { width: 250px; }
    .showingon { width: 150px; }
    .type { width: 200px; }
    .duration { width: 150px; }
}
</style>