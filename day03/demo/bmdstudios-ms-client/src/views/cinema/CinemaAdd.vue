<template>
  <div>
    <!-- 准备表单 -->
    <el-form :model="form" label-width="100px" style="width:700px">
      <el-form-item label="电影院名称">
        <el-input v-model="form.cinema_name"></el-input>
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
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
  mounted(){
    this.initMap();
  },

  data() {
    return {
      form: {
        cinema_name:'',
        address:'',
        province:'',
        city:'',
        district:'',
        longitude:'',
        latitude:'',
        tags:'',
      }
    }
  },

  methods:{
    initMap(){
      AMapLoader.load({
        key:"7bfbe3ab215345f405c23b5eed760ca8",             // 申请好的Web端开发者Key，首次调用 load 时必填
        version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins:[''],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap)=>{
        this.map = new AMap.Map("container",{  //设置地图容器id
          viewMode:"3D",    //是否为3D地图模式
          zoom:11,           //初始化地图级别
          center:[116.397509,39.907644], //初始化地图中心点位置
        });
      }).catch(e=>{
        console.log(e);
      })
    },
  },
};
</script>

<style lang="scss" scoped>
</style>