<template>
  <div>
    <!-- 准备表单 -->
    <el-form :model="form" label-width="100px" style="width:700px">
      <el-form-item label="电影院名称">
        <el-input v-model="form.cinema_room"></el-input>
      </el-form-item>
      <el-form-item label="选择位置">
        <div id="container" 
          style="height:200px; border:1px solid #666;">
        </div>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="省份">
        <el-input v-model="form.province"></el-input>
      </el-form-item>
      <el-form-item label="城市">
        <el-input v-model="form.city"></el-input>
      </el-form-item>
      <el-form-item label="地区">
        <el-input v-model="form.district"></el-input>
      </el-form-item>
      <el-form-item label="经度">
        <el-input v-model="form.longitude"></el-input>
      </el-form-item>
      <el-form-item label="纬度">
        <el-input v-model="form.latitude"></el-input>
      </el-form-item>
      <el-form-item label="选择标签">
        <el-select style="width:100%;" v-model="form.tags">
          <el-option label="3D" value="3D"></el-option>
          <el-option label="小吃" value="小吃"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">确认新增</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        cinema_room:'',
        address:'',
        privince:'',
        city:'',
        district:'',
        longitude:'',
        latitude:'',
        tags:'',
      }
    }
  },
};
</script>

<style lang="scss" scoped>
</style>