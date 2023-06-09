<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>电影管理</el-breadcrumb-item>
      <el-breadcrumb-item>电影列表</el-breadcrumb-item>
      <el-breadcrumb-item>修改电影信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 分隔线 -->
    <el-divider></el-divider>

    <!-- 表单 -->
    <el-form 
      ref="form"
      :model="form" 
      :rules="rules"
      label-width="100px" style="width:600px">
      <el-form-item prop="cover" label="封面图片">
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
      <el-form-item prop="categoryId" label="电影类别">
        <el-radio-group v-model="form.categoryId">
          <el-radio label="1">热映</el-radio>
          <el-radio label="2">待映</el-radio>
          <el-radio label="3">经典</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="title" label="电影名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item prop="type" label="电影类型">
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
      <el-form-item prop="starActor" label="电影主演">
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
      <el-form-item prop="showingon" label="上映时间">
        <el-date-picker 
          v-model="form.showingon"
          type="date"
          placeholder="选择日期"
          style="width:100%;"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="score" label="电影评分">
        <el-rate 
          style="margin-top: 10px;"
          v-model="form.score" :max="10"></el-rate>
      </el-form-item>
      <el-form-item prop="duration" label="电影时长">
        <el-input v-model="form.duration"></el-input>
      </el-form-item>
      <el-form-item prop="description" label="电影简介">
        <div style="border: 1px solid #ccc;">
            <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editor"
                :defaultConfig="toolbarConfig"
                :mode="mode"
            />
            <Editor
                style="height: 200px; overflow-y: hidden;"
                v-model="form.description"
                :defaultConfig="editorConfig"
                :mode="mode"
                @onCreated="onCreated"
            />
        </div>
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
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor } from '@wangeditor/editor'

export default {
  components:  {Editor, Toolbar},

  mounted(){
    // 加载所有的电影类别列表项
    this.queryMoviesTypes()
  },
  beforeDestroy() {
      const editor = this.editor
      if (editor == null) return
      editor.destroy() // 组件销毁时，及时销毁编辑器
  },

  data() {
    return {
      editor: null,
      html: '<p>hello</p>',
      toolbarConfig: { 
        toolbarKeys: ['bold', 'underline', 'italic', 'color']
      },
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'default', // or 'simple'

      loading: false, // 是否正在加载中
      form: {
        categoryId: '1',
        cover: '',
        title: '',
        type: '',
        starActor: '',
        showingon: '',
        score: 0,
        description: '',
        duration: ''
      },
      rules: {
        categoryId: [
          {required:true, message:'必填', trigger:'blur'}
        ],
        cover: [
          {required:true, message:'必填', trigger:'blur'}
        ],
        title: [
          {required:true, message:'必填', trigger:'blur'}
        ],
        type: [
          {required:true, message:'必填', trigger:'blur'}
        ],
        starActor: [
          {required:true, message:'必填', trigger:'blur'}
        ],
        showingon: [
          {required:true, message:'必填', trigger:'blur'}
        ],
        score: [
          {required:true, message:'必填', trigger:'blur'}
        ],
        description: [
          {required:true, message:'必填', trigger:'blur'}
        ],
        duration: [
          {required:true, message:'必填', trigger:'blur'}
        ],
      },
      types:[], // 保存所有的电影类型 [{id:1, typename:'惊悚'}]
      actors: [], // 保存演员列表
    }
  },

  methods: {

    /** 点击提交按钮 */
    submit(){
      this.$refs.form.validate(valid=>{
        if(valid){
          // 整理两个字段  form.type   form.starActor
          this.form.type = this.form.type.join('／')
          this.form.starActor = this.form.starActor.join('／')
          console.log(this.form)
          // 提交表单
          httpApi.movieApi.save(this.form).then(res=>{
            console.log('新增电影结果', res)
            if(res.data.code==200){  // 新增成功
              this.$message({type:'success', message:'成功'})
              this.$router.push('/home/movie-list')
            }else {
              this.$message({type:'error', message:'系统异常'})
            }
          })
        }
      })
    },

    onCreated(editor) {
        this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        
        setTimeout(()=>{
          const toolbar = DomEditor.getToolbar(editor)
          const curToolbarConfig = toolbar.getConfig()
          console.log('---------------------------')
          console.log( curToolbarConfig.toolbarKeys ) // 当前菜单排序和分组
        }, 1000)
    },

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

<style src="@wangeditor/editor/dist/css/style.css"></style>
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