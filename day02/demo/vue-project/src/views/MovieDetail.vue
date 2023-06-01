<template>
  <div>
    <h1 class="red">电影详情</h1>

    <h3>通过query的方式获取参数ID：{{$route.query.id}}</h3>
    <h3>通过params的方式获取参数ID：{{$route.params.id}}</h3>
    
    <img :src="movie.cover" alt="">
    <h3>电影名称：{{movie.title}}</h3>
    <h3>电影主演：{{movie.star_actor}}</h3>
    <h3>上映时间：{{movie.showingon}}</h3>
    <h3>简介：
      <p v-html="movie.description"></p>
    </h3>
    
    <template>两个字</template>
    <span>两个字</span>

    <hr>
    <button @click="next">换一部电影</button>
  </div>
</template>

<script>
  import myaxios from '@/http/MyAxios'

  export default {
    data() {
      return {
        // 此处声明template中需要使用的变量 
        movie: { }
      }
    },
    // methods定义方法
    methods: {
      // 换一部电影， 修改movie对象的属性
      next() {
        this.movie = {
          name: '灌篮高手',
          actors: ['宫城良田', '樱木花道'],
          showingon: '2023-04-10'
        }
      }
    },

    /** mounted方法将会在组件挂载完毕后自动执行 */
    mounted () {
      // 获取上一个页面传过来的参数，通过参数id发送请求加载电影详情
      let id = this.$route.query.id || this.$route.params.id
      console.log('mounted执行，电影ID：' + id)
      // 发送请求：
      // https://web.codeboy.com/bmdapi/movie-info/query?id=654
      let url = "https://web.codeboy.com/bmdapi/movie-info/query"
      let params = { id } 
      myaxios.get(url, params).then(res=>{
        console.log('查询到的电影详情', res)
        this.movie = res.data.data
      })
    },
  }
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>