<template>
  <div>
    <!-- 放映厅列表页 -->
    <el-button type="primary" @click="showFormDialog">
      新增放映厅
    </el-button>

    <el-divider content-position="left">放映厅列表</el-divider>
    <!-- 表格 -->
    <el-table :data="rooms">
      <el-table-column label="放映厅名称" prop="room_name"></el-table-column>
      <el-table-column label="放映厅类型" prop="room_type"></el-table-column>
      <el-table-column label="放映厅座位数量">
        <template slot-scope="scope">
          <span v-if="scope.row.room_size">
            {{scope.row.room_size}} 个座位
          </span>
          <span v-else>【暂未配置座位模板】</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button 
            @click="$router.push(`/home/showingon-plan-list?id=${scope.row.id}`)"
            size="small" type="info" icon="el-icon-view" circle></el-button>
          <el-button 
            @click="$router.push(`/home/showingon-plan-add?id=${scope.row.id}`)"
            size="small" type="success" icon="el-icon-plus" circle></el-button>
          <el-button 
            @click="$router.push(`/home/seat-template?id=${scope.row.id}`)"
            size="small" type="warning" icon="el-icon-s-grid" circle></el-button>
          <el-button 
            size="small" type="danger" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 自定义对话框 -->
    <el-dialog title="新增放映厅" :visible.sync="dialogFormVisible">
      <el-form 
        style="padding-right: 40px;"
        :model="form" label-width="100px">
        <el-form-item label="放映厅名称" >
          <el-input v-model="form.room_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="放映厅类型" >
          <el-select 
            v-model="form.room_type" placeholder="请选择类型">
            <el-option 
              v-for="item in types"
              :key="item.id"
              :label="item.type_name" 
              :value="item.type_name">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">
          确 定
        </el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import httpApi from '@/http';
export default {
  data() {
    return {
      rooms: [], // 存储放映厅列表
      types: [], // 存储放映厅类型列表
      dialogFormVisible: false, // 控制是否显示表单对话框
      form: {   // 封装表单项
        movie_cinema_id: this.$route.params.id,   // 影院ID
        room_name: '',
        room_type: '', 
      }
    }
  },

  methods: {

    /** 列出当前电影院的放映厅列表 */
    listCinemaRooms(){
      let params = {
        cinema_id: this.form.movie_cinema_id
      }
      httpApi.cinemaRoomApi.list(params).then(res=>{
        console.log('加载当前放映厅列表', res)
        this.rooms = res.data.data
      })
    },

    /** 提交表单 */
    submit(){
      httpApi.cinemaRoomApi.add(this.form).then(res=>{
        if(res.data.code==200){ // 新增成功
          this.$message({message:'成功', type:'success'})
          this.dialogFormVisible = false
          // 重新加载列表
          this.listCinemaRooms()
        }else { 
          this.$message({message:'失败，稍后重试', type:'error'})
        }
      })
    },

    showFormDialog() {
      this.dialogFormVisible=true // 显示对话框
      // 加载放映厅类型列表，更新下拉列表框
      httpApi.cinemaRoomApi.queryAllTypes().then(res=>{
        console.log('加载放映厅类型', res)
        this.types = res.data.data
      })
    }
  },

  mounted(){
    // 加载放映厅列表
    this.listCinemaRooms()
  }
};
</script>

<style lang="scss" scoped>
</style>