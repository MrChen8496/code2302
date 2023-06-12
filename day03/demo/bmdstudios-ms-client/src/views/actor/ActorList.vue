<template>
  <div>
    <!-- views/actor/ActorList.vue -->
    <!-- 表单 -->
    姓名：
    <el-input 
      v-model="name"
      @keyup.native.enter="search"
      placeholder="姓名关键字" style="width:200px;"></el-input> 

    &nbsp;
    <el-button type="primary" @click="search">查询</el-button>
    <el-divider content-position="left">列表数据</el-divider>

    <!-- 展示演员列表数据 -->
    <person 
      v-for="item in actors" 
      :key="item.id"
      :name="item.actor_name" 
      :avatar="item.actor_avatar"
      @delete="deleteActor(item.id, $event)">
    </person>

  </div>
</template>

<script>
import Person from "@/components/Person.vue"
import myaxios from '@/http/MyAxios'
import httpApi from '@/http/index'

export default {
  components: { Person },

  data() {
    return {
      name: '',  // 绑定关键字
      actors: [], // 绑定所有演员
    }
  },

  /** 页面挂载完毕后执行 */
  mounted(){
    this.listActors()
  },

  methods: {

    /**删除演员 */
    deleteActor(id, event){
      console.log('接收到了参数:', event)

      this.$confirm('确认删除吗？', '提示', {
        confirmButtonText:'确认',
        cancelButtonText:'取消',
        type:'warning'
      }).then(res=>{
        httpApi.actorApi.delete({id}).then(res=>{
          if(res.data.code==200){
            this.search()
          }
        })
      }).catch(err=>{})

    },

    /** 搜索 */
    search(){
      if(this.name.trim()==''){
        this.listActors()
      }else {
        this.listActorsByName()
      }
    },

    /** 通过关键字查询演员列表 */
    listActorsByName(){
      //调用接口，返回promise
      let params = {name: this.name}
      httpApi.actorApi.queryActorsByName(params).then(res=>{
        this.actors = res.data.data
      })
    },

    /** 列出演员列表 */
    listActors() {
      httpApi.actorApi.queryActors().then(res=>{
        this.actors = res.data.data
      })
    }
  },

};
</script>

<style lang="scss" scoped>
</style>