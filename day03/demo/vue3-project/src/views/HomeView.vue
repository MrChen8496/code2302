<template>
  <div class="home">
    <h3>电影名称：{{movie.name}}</h3>
    <h3>电影主演：{{movie.star_actor}}</h3>
    <h3>上映时间：{{movie.showingon}}</h3>
    <h3>电影时长：{{movie.duration}}</h3>
    <hr>
    <button @click="next">换一部电影</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomeView',

  // setup方法为vue3组件的启动方法  当前组件初始化时执行 
  // 该方法返回的对象，template中可以直接 {{}} 访问
  setup(){  
    // 自定义对象，导出
    let movieRef = ref({
      name: '这个杀手不太冷',
      star_actor: 'lion',
      showingon: '2010-10-10',
      duration: 128
    })
    // 自定义方法，导出
    let next = function(){
      movieRef.value = {
        name: '交换余生',
        star_actor: '雷佳音',
        showingon: '2021-2-10',
        duration: 116,
      }
    }
    return { movie:movieRef, next }
  }

});
</script>
