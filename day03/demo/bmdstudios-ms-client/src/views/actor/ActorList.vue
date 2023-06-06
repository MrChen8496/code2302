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
    <el-input placeholder="姓名关键字" style="width:200px;"></el-input> 
    &nbsp;
    <el-button type="primary">查询</el-button>
    <el-divider content-position="left">列表数据</el-divider>

    <!-- 展示演员列表数据 -->
    <person 
      v-for="item in actors" 
      :key="item.id"
      :name="item.actor_name" 
      :avatar="item.actor_avatar">
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
      actors: [], // 绑定所有演员
    }
  },

  /** 页面挂载完毕后执行 */
  mounted(){
    this.listActors()
  },

  methods: {
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