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
        <el-select 
          style="width:100%"
          v-model="form.type" multiple>
          <el-option
            v-for="item in types"
            :key="item.id"
            :label="item.typename" 
            :value="item.typename">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="电影主演">
        <el-select
          v-model="form.starActor"
          multiple
          filterable
          remote
          reserve-keyword
          placeholder="搜索演员"
          :remote-method="remoteMethod"
          :loading="loading"
          style="width:100%;">

          <el-option
            v-for="item in actors" 
            :key="item.id" 
            :label='item.actor_name' 
            :value="item.actor_name">
          </el-option>

        </el-select>
      </el-form-item>
      <el-form-item label="上映时间">
        <el-date-picker 
          v-model="form.showingon"
          type="date"
          placeholder="选择日期"
          style="width:100%;">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="电影评分">
        <el-rate 
          style="margin-top: 10px;"
          v-model="form.score" :max="10"></el-rate>
      </el-form-item>
      <el-form-item label="电影时长">
        <el-input v-model="form.duration"></el-input>
      </el-form-item>
      <el-form-item label="电影简介">
        
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
    // 加载所有的电影类别列表项
    this.queryMoviesTypes()
  },

  data() {
    return {
      loading: false, // 是否正在加载中
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
      },
      types:[], // 保存所有的电影类型 [{id:1, typename:'惊悚'}]
      actors: [], // 保存演员列表
    }
  },

  methods: {
    /** 选择演员时，远程搜索方法，会传入query关键字 */ 
    remoteMethod(query){
      console.log(query)  //query就是文本框中的关键字
      if(query != ''){
        this.loading = true
        // 发请求，模糊查询演员列表
        httpApi.actorApi.queryActorsByName({name:query}).then(res=>{
          this.loading = false
          console.log('模糊查询结果', res)
          this.actors = res.data.data
        })
      }
    },

    /** 查询电影类型列表 */
    queryMoviesTypes(){
      httpApi.movieApi.queryTypes().then(res=>{
        console.log('查询电影类型', res)
        this.types = res.data.data
      })
    },

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