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
    <el-form :model="form" label-width="100px" style="width:600px">
      <el-form-item label="选择电影">
        <el-select 
          v-model="form.movie_id"
          filterable
          remote
          reserve-keyword
          :remote-method="remoteMethod"
          :loading="loading"
          style="width:100%"
          placeholder="请输入关键字">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上映时间">
        <el-col :span="11">
          <el-date-picker 
            v-model="form.showingon_date"
            type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col style="text-align:center;" class="line" :span="2">
          -
        </el-col>
        <el-col :span="11">
          <el-time-select
            v-model="form.showingon_time"
            :picker-options="{
              start: '06:00',
              step: '00:15',
              end: '23:59'
            }"
            placeholder="选择场次">
          </el-time-select>
        </el-col>
      </el-form-item>
      <el-form-item label="票价">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="是否立即发布">
        <el-switch v-model="form.status"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

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
      loading: false, 
      roomInfo: {}, // 存储放映厅的基本信息
      form: {
        cinema_id:'',
        cinema_room_id:'',
        movie_id:'',
        showingon_date: '',
        showingon_time: '',
        status: '',
        price: ''
      }
    }
  },

  methods: {
    /** 当远程搜索电影信息时，执行该方法，并传入关键字 */
    remoteMethod(query){
      let params = {name:query, page:1, pagesize:10}
      httpApi.movieApi.queryMoviesByName(params).then(res=>{
        console.log("模糊查询列表结果", res)
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