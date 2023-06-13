<template>
  <div>
    <!-- 放映厅列表页 -->
    <el-button type="primary" @click="showFormDialog">
      新增放映厅
    </el-button>

    <el-divider content-position="left">放映厅列表</el-divider>
    <!-- 表格 -->
    <el-table>
      <el-table-column label="放映厅名称"></el-table-column>
      <el-table-column label="放映厅类型"></el-table-column>
      <el-table-column label="放映厅座位数量"></el-table-column>
      <el-table-column label="操作"></el-table-column>
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
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import httpApi from '@/http';
export default {
  data() {
    return {
      types: [], // 存储放映厅列表
      dialogFormVisible: false, // 控制是否显示表单对话框
      form: {   // 封装表单项
        movie_cinema_id: this.$route.params.id,   // 影院ID
        room_name: '',
        room_type: '', 
      }
    }
  },

  methods: {
    showFormDialog() {
      this.dialogFormVisible=true // 显示对话框
      // 加载放映厅类型列表，更新下拉列表框
      httpApi.cinemaRoomApi.queryAllTypes().then(res=>{
        console.log('加载放映厅类型', res)
        this.types = res.data.data
      })
    }
  },
};
</script>

<style lang="scss" scoped>
</style>