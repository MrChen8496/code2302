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
          ref="selector"
          v-model="form.movie_id"
          filterable
          remote
          reserve-keyword
          :remote-method="remoteMethod"
          :loading="loading"
          style="width:100%"
          placeholder="请输入关键字">
          
          <el-option 
            v-for="item in movies"
            :key="item.id"
            :label="item.title" 
            :value="item.id"></el-option>
          
        </el-select>
      </el-form-item>
      <el-form-item label="上映时间">
        <el-col :span="11">
          <el-date-picker 
            v-model="form.showingon_date"
            value-format="yyyy-MM-dd"
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
        <el-switch 
          :active-value="1"
          :inactive-value="0"
          v-model="form.status"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">立即创建</el-button>
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
      movies: [],   // 存储模糊查询的电影列表结果
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

    /** 提交表单 */
    submit(){
      this.form.cinema_id = this.roomInfo.cinema_id
      this.form.cinema_room_id = this.$route.query.id
      console.log(this.form)
      let movieName = this.$refs.selector.selectedLabel

      // 发送请求，执行新增排片计划业务
      httpApi.showingonPlanApi.add(this.form).then(res=>{
        console.log('添加计划结果', res)
        if(res.data.code==200){
          this.$notify({
            title: '成功',
            type: 'success',
            dangerouslyUseHTMLString: true,
            message: `
              <p>电影名称：《${movieName}》</p>
              <p>放映时间：${this.form.showingon_date}  
                 场次：${this.form.showingon_time}</p>
              <p>放映厅：${this.roomInfo.cinema_room_name}</p>
            `
          });
        }
      })
    },

    /** 当远程搜索电影信息时，执行该方法，并传入关键字 */
    remoteMethod(query){
      if(query.trim()){
        let params = {name:query, page:1, pagesize:10}
        httpApi.movieApi.queryMoviesByName(params).then(res=>{
          console.log("模糊查询列表结果", res)
          // 将搜索到的结果存入data
          this.movies = res.data.data.result
        })
      }
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