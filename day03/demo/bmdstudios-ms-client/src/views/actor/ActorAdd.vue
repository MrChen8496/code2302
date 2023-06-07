<template>
  <div>
    <!-- views/actor/ActorAdd.vue -->
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>演员管理</el-breadcrumb-item>
      <el-breadcrumb-item>新增演员</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分隔线 -->
    <el-divider></el-divider>

    <!-- 表单 -->
    <el-form :model="form" label-width="100px">
      <el-form-item label="演员姓名">
        <el-input v-model="form.actorName" placeholder="输入姓名">
        </el-input>
      </el-form-item>
      <el-form-item label="选择头像">
        
        <el-upload
          class="avatar-uploader"
          action="http://localhost:9000/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img 
            v-if="form.actorAvatar" 
            :src="form.actorAvatar" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">立即新增</el-button>
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
        actorName: '',   // 封装演员名字
        actorAvatar: ''  // 封装演员头像路径
      }
    }
  },
  methods: {

    submit(){
      console.log(this.form)
    },

    /** 上传成功后执行 */
    handleAvatarSuccess(res, file) {
      console.log(res)
      // 将上传成功的图片访问路径赋值给form对象的属性
      this.form.actorAvatar = res.data
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
  }
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    height: 178px;
    display: block;
  }
</style>