<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      <el-breadcrumb-item>新增电影</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分隔线 -->
    <el-divider></el-divider>

    <!-- 表单 -->
    <el-form :model="form" label-width="100px" style="width:600px">
      <el-form-item label="封面图片">
        <el-upload
          class="avatar-uploader"
          :action="`${UPLOADURL}/upload`"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img 
            v-if="form.cover" 
            :src="form.cover" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>        
      </el-form-item>
      <el-form-item label="电影类别">
        <el-radio-group v-model="form.categoryId">
          <el-radio label="1">热映</el-radio>
          <el-radio label="2">待映</el-radio>
          <el-radio label="3">经典</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="电影名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="电影类型">
        <el-select v-model="form.type">
          <el-option label="111" value="1"></el-option>
          <el-option label="222" value="2"></el-option>
          <el-option label="333" value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电影主演"></el-form-item>
      <el-form-item label="上映时间">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="电影评分">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="电影时长">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="电影简介">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        categoryId: '1',
        cover: '',
        title: '',
        type: '',
        starActor: '',
        showingon: '',
        score: '',
        description: '',
        duration: ''
      }
    }
  },

  methods: {
    /** 上传成功后执行 */
    handleAvatarSuccess(res, file) {
      console.log(res)
      // 将上传成功的图片访问路径赋值给form对象的属性
      this.form.cover = res.data
    },

    /** 图片上传之前执行 */
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    height: 120px;
    display: block;
  }
</style>