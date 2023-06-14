<template>
  <div>
    <!-- cinema/ShowingonPlanList.vue -->
    <p>
      <b style="color:#3699ff;">
        {{roomInfo.cinema_name}}
      </b>
      的
      <b style="color:#3699ff;">
        {{roomInfo.cinema_room_name}}
        （{{roomInfo.cinema_room_type}}）
      </b>
      的排片计划列表
    </p>
    <el-divider></el-divider>

    <!-- 显示表格数据 -->
    <el-table :data="plans">
      <el-table-column label="电影名称" prop="title"></el-table-column>
      <el-table-column label="放映时间" prop="showingon_date"></el-table-column>
      <el-table-column label="场次" prop="showingon_time"></el-table-column>
      <el-table-column label="票价" prop="price"></el-table-column>
      <el-table-column label="是否已发布">
        <el-switch></el-switch>
      </el-table-column>
      <el-table-column label="操作">
        <el-button 
            size="small" type="danger" 
            icon="el-icon-delete" circle></el-button>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
import httpApi from '@/http';
export default {
  mounted(){
    // 显示放映厅的基本信息
    this.showRoomInfo()
    // 列出当前放映厅已经配置好的计划列表
    this.listPlans()
  },
  
  data() {
    return {
      plans: [],    // 存储排片计划列表数据
      movies: [],   // 存储模糊查询的电影列表结果
      roomInfo: {}, // 存储放映厅的基本信息
    }
  },

  methods: {
    /** 列出所有排片计划 */
    listPlans(){
      let params = {room_id: this.$route.query.id}
      httpApi.showingonPlanApi.queryByRoomId(params).then(res=>{
        console.log('查到的排片计划列表', res)
        this.plans = res.data.data
      })
    },

    showRoomInfo() {
      // 从上一页传来的参数中获取放映厅ID
      let id = this.$route.query.id  
      httpApi.cinemaRoomApi.queryById({id}).then(res=>{
        console.log("放映厅信息", res)
        this.roomInfo = res.data.data
      })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>