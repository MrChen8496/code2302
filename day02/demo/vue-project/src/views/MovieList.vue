<template>
  <div>
    <!-- views/MovieList.vue -->
    <h2>电影列表</h2>
    <button @click="listMovies">访问电影列表</button>
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
    <div class="header">
      <div class="cover">
        <img src="" alt="">
      </div>
      <div class="title">标题xxx</div>
      <div class="actor">主演xxxx</div>
      <div class="showingon">上映时间xxxxx</div>
      <div class="type">电影类型xxxx</div>
      <div class="duration">电影时长xxxx</div>
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
        movies: [],  // 初始化数组，保存需要显示的电影数组
      }
    },
    methods: {
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