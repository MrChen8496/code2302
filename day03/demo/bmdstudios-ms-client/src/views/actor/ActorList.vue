<template>
  <div>
    <!-- views/actor/ActorList.vue -->

    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>演员管理</el-breadcrumb-item>
      <el-breadcrumb-item>演员列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分隔线 -->
    <el-divider></el-divider>

    <!-- 表单 -->
    姓名：
    <el-input 
      v-model="name"
      @keyup.native.enter="search"
      placeholder="姓名关键字" style="width:200px;"></el-input> 

    &nbsp;
    <el-button type="primary" @click="search">查询</el-button>
    <el-divider content-position="left">列表数据</el-divider>

    <!-- 展示演员列表数据 -->
    <person 
      v-for="item in actors" 
      :key="item.id"
      :name="item.actor_name" 
      :avatar="item.actor_avatar"
      @delete="deleteActor(item.id)">
    </person>

  </div>
</template>

<script>
import Person from "@/components/Person.vue"
import myaxios from '@/http/MyAxios'

export default {
  components: { Person },

  data() {
    return {
      name: '',  // 绑定关键字
      actors: [], // 绑定所有演员
    }
  },

  /** 页面挂载完毕后执行 */
  mounted(){
    this.listActors()
  },

  methods: {

    /**删除演员 */
    deleteActor(id){
      let url = "http://localhost:3010/movie-actor/del"
      myaxios.post(url, {id}).then(res=>{
        console.log('删除演员结果', res)
        this.search()
      })
    },

    /** 搜索 */
    search(){
      if(this.name.trim()==''){
        this.listActors()
      }else {
        this.listActorsByName()
      }
    },

    /** 通过关键字查询演员列表 */
    listActorsByName(){
      // 发送post请求，模糊查询，得到结果
      let url = "http://localhost:3010/movie-actors/name"
      let params = {name: this.name}
      myaxios.post(url, params).then(res=>{
        console.log('模糊查询结果', res)
        // 更新列表即可
        this.actors = res.data.data
      })
    },

    /** 列出演员列表 */
    listActors() {
      let url = "http://localhost:3010/movie-actors"
      let params = {page:1, pagesize:100}
      myaxios.get(url, params).then(res=>{
        console.log('演员列表', res)
        this.actors = res.data.data
      })
    }
  },

};
</script>

<style lang="scss" scoped>
</style>