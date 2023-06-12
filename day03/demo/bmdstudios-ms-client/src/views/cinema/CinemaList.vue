<template>
  <div>
    <!-- 地图区域 -->
    <div 
      id="container" 
      style="height:200px; border:1px solid #666;"></div>
    <el-divider content-position="left">影院列表</el-divider>
    <!-- 表格数据 -->
    <el-table :data="cinemas">
      <el-table-column label="影院名称" width="250px">
        <template slot-scope="scope">
          <i class="el-icon-video-camera"></i>
          {{scope.row.cinema_name}}
        </template>
      </el-table-column>
      <el-table-column label="影院详细地址">
        <template slot-scope="scope">
          <i class="el-icon-s-flag"></i>
          {{scope.row.address}}
        </template>
      </el-table-column>
      <el-table-column label="影院位置" width="230px">
        <template slot-scope="scope">
          {{scope.row.province}}
          {{scope.row.city}}
          {{scope.row.district}}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="230px">
        <template>
          <el-button size="small" type="info" icon="el-icon-position" circle></el-button>
          <el-button size="small" type="success" icon="el-icon-thumb" circle></el-button>
          
          <el-button 
            size="small" type="warning" icon="el-icon-edit" circle></el-button>
          <el-button 
            size="small" type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import httpApi from '@/http';
export default {

  data() {
    return {
      cinemas: [], // 影院列表
    }
  },

  mounted(){
    this.listCinemas()
  },

  methods: {

    /** 列出所有影院 */
    listCinemas() {
      httpApi.cinemaApi.queryAll().then(res=>{
        console.log('加载所有影院', res)
        this.cinemas = res.data.data
      })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>