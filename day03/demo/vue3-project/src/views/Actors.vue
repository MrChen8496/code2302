<template>
  <div>
    <!-- v3tss快捷键生成模板 -->
    <h2>演员列表</h2>
    <button @click="listActors">点击加载演员列表</button>
    <hr>
    <img 
      v-for="item in actorList"
      :key="item.id"
      style="width: 100px; height:100px; object-fit: cover; border-radius: 10px;"
      :src="item.actor_avatar" 
      :title="item.actor_name">
  </div>
</template>

<script setup lang="ts">
import myaxios from '@/http/MyAxios'
import { ref } from 'vue'

/** 在声明响应式ref对象时，可以使用泛型的方式指明目标对象的数据类型 */
interface Actor {
  id: number,
  actor_name: string,
  actor_avatar: string
}
// 在ref()创建代理时需要明确的指定目标对象的数据类型 （泛型语法<>）
const actorList = ref<Actor[]>([])

function listActors(){
  let url = 'https://web.codeboy.com/bmdapi/movie-actors'
  let params = {page:1, pagesize:100}
  myaxios.get(url, params).then(res=>{
    console.log(res)
    let actors = res.data.data  // 获取演员数组
    actorList.value = actors
  })
}

</script>

<style scoped>

</style>