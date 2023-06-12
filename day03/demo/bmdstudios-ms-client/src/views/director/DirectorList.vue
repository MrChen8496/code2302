<template>
  <div>
    <!-- views/director/DirectorList.vue -->
    <!-- 表单 -->
    姓名：
    <el-input 
      v-model="name"
      @keyup.native.enter="search"
      placeholder="姓名关键字" style="width:200px;"></el-input> 

    &nbsp;
    <el-button type="primary" @click="search">查询</el-button>
    <el-divider content-position="left">列表数据</el-divider>

    <!-- 展示导演列表数据 -->
    <person 
      v-for="item in directors" 
      :key="item.id"
      :name="item.director_name" 
      :avatar="item.director_avatar">
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
      directors: [], // 绑定所有导演
    }
  },

  /** 页面挂载完毕后执行 */
  mounted(){
    this.listDirectors()
  },

  methods: {

    /** 搜索 */
    search(){
      if(this.name.trim()==''){
        this.listDirectors()
      }else {
        this.listDirectorsByName()
      }
    },

    /** 通过关键字查询导演列表 */
    listDirectorsByName(){
      // 发送post请求，模糊查询，得到结果
      let url = "http://localhost:3010/movie-directors/name"
      let params = {name: this.name}
      myaxios.post(url, params).then(res=>{
        console.log('模糊查询结果', res)
        // 更新列表即可
        this.directors = res.data.data
      })
    },

    /** 列出导演列表 */
    listDirectors() {
      let url = "http://localhost:3010/movie-directors"
      let params = {page:1, pagesize:100}
      myaxios.get(url, params).then(res=>{
        console.log('导演列表', res)
        this.directors = res.data.data
      })
    }
  },

};
</script>

<style lang="scss" scoped>
</style>