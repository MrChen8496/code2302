<template>
  <div>
    <h1 class="red">电影详情</h1>

    <h3>通过query的方式获取参数ID：{{$route.query.id}}</h3>
    <h3>通过params的方式获取参数ID：{{$route.params.id}}</h3>
    

    <h3>电影名称：{{movie.name}}</h3>
    <h3>电影主演：{{movie.actors}}</h3>
    <h3>上映时间：{{movie.showingon}}</h3>
    <p>简介（<i v-pre>用{{}}方式</i>）：{{movie.desc}}</p>
    <p>
      简介（用v-text指令）：
      <span v-text="movie.desc"></span>
    </p>
    <p>
      简介（用v-html指令）：
      <span v-html="movie.desc"></span>
    </p>
    <hr>
    <button @click="next">换一部电影</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 此处声明template中需要使用的变量 
        movie: {
          name: '功夫',
          actors: ['周星驰', '黄圣依', '火云邪神'],
          showingon: '2014-10-05',
          desc: '这是一部<b>史诗级电影</b>，讲述了一个可歌可泣的爱情故事。'
        }
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
    },
  }
</script>

<style lang="scss" scoped>
.red {
  color: red;
}
</style>