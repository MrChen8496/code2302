<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      <el-breadcrumb-item>电影列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分隔线 -->
    <el-divider></el-divider>

    <!-- 表单 -->
    电影名称：
    <el-input 
      v-model="name"  
      @keyup.native.enter="submit"
      placeholder="电影名称关键字" style="width:200px;"></el-input> 
    &nbsp;
    <el-button type="primary" @click="submit">查询</el-button>
    <el-divider content-position="left">列表数据</el-divider>

    <!-- 表格 -->
    <el-table :data="movieData.result">
      <el-table-column label="封面" align="center" width="120px">
        <template slot-scope="scope">
          <img :src="scope.row.cover" width="60px">
        </template>
      </el-table-column>
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="主演" prop="star_actor" width="220px"></el-table-column>
      <el-table-column label="上映时间" prop="showingon" width="150px"></el-table-column>
      <el-table-column label="时长" width="150px">
        <template slot-scope="scope">
          {{scope.row.duration}} 分钟
        </template>
      </el-table-column>
      <el-table-column label="所属类别" prop="type" width="200px"></el-table-column>
      <el-table-column label="操作" width="220px">
        <template slot-scope="scope">
          <el-button size="small" type="info" icon="el-icon-user" circle></el-button>
          <el-button size="small" type="success" icon="el-icon-picture-outline" circle></el-button>
          
          <el-button size="small" type="warning" icon="el-icon-edit" circle></el-button>
          <el-button 
            @click="deleteMovie(scope.row.id)"
            size="small" type="danger" icon="el-icon-delete" circle></el-button>

        </template>
      </el-table-column>
    </el-table>

    <!-- 分页器 -->
    <el-pagination
      style="margin:20px;"
      layout="->, total, prev, pager, next, jumper"
      :current-page="movieData.page"
      :total="movieData.total"
      :page-size="movieData.pagesize"
      @current-change="changeCurrent($event)">
    </el-pagination>

  </div>
</template>

<script>
import httpApi from '@/http';
export default {
  mounted(){
    this.listMovies()
  },

  data() {
    return {
      name: '', // 双向数据绑定  绑定文本框的值 
      movieData: {
        page: 1,
        pagesize: 3,
        result: [],
        total:0
      }
    }
  },

  methods: {

    /** 删除电影业务 */
    deleteMovie(id){
      console.log(id)
      // 发送http请求，执行删除业务
      httpApi.movieApi.delete({id}).then(res=>{
        console.log('删除结果', res)
        if(res.data.code==200){
          // 删除成功后，得计算一下，现在最大页码是多少？
          let maxPage = 
            Math.ceil((this.movieData.total-1)/this.movieData.pagesize)
          if(maxPage<this.movieData.page){
            this.movieData.page = maxPage
          }
          // 重新加载当前页数据
          this.search()
        }
      })
    },

    /** 当前页码被改变时触发 */
    changeCurrent(page){
      console.log(page)
      this.movieData.page = page  // 修改当前页码
      this.search()
    },

    /** 点击查询按钮 */
    submit(){
      this.movieData.page = 1
      this.search()
    },

    /** 模糊查询电影列表 */
    search(){
      if(this.name.trim() == ''){ // 没有关键字
        this.listMovies()  
      }else {
        this.listMoviesByName()
      }
    },

    /** 通过关键字查询列表 */
    listMoviesByName(){
      let params = {
        page : this.movieData.page, 
        pagesize : this.movieData.pagesize,
        name: this.name
      }
      httpApi.movieApi.queryMoviesByName(params).then(res=>{
        // 查询成功后，更新当前列表
        this.movieData = res.data.data
      })
    },

    /** 列出电影列表 */
    listMovies() {
      let params = {
        page : this.movieData.page, 
        pagesize : this.movieData.pagesize
      }
      httpApi.movieApi.queryMovies(params).then(res=>{
        console.log('加载电影列表', res)
        // 将数据存入data
        this.movieData = res.data.data
      })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>