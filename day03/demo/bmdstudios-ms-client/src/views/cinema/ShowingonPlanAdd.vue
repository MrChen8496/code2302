<template>
  <div>
    <!-- cinema/ShowingonPlanAdd.vue -->
    <p>
      为
      <b style="color:#3699ff;">
        {{roomInfo.cinema_name}}
      </b>
      的
      <b style="color:#3699ff;">
        {{roomInfo.cinema_room_name}}
        （{{roomInfo.cinema_room_type}}）
      </b>
      添加排片计划
    </p>
    <el-divider></el-divider>
    <!-- 表单 -->

  </div>
</template>

<script>
import httpApi from '@/http';
export default {
  mounted(){
    // 显示放映厅的基本信息
    this.showRoomInfo()
  },
  
  data() {
    return {
      roomInfo: {}, // 存储放映厅的基本信息
    }
  },

  methods: {
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