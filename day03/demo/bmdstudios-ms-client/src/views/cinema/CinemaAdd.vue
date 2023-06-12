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
        <el-select 
          multiple
          style="width:100%;" 
          v-model="form.tags">
          <el-option 
            v-for="item in types" 
            :key="item.id" 
            :label="item.tagname" 
            :value="item.tagname">
          </el-option>
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
import httpApi from '@/http';

export default {
  mounted(){
    // 初始化地图
    this.initMap();
    // 初始化电影类型列表
    this.listMovieTypes();
  },

  data() {
    return {
      types: [], // 保存所有影院类型
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

    /** 列出电影类型列表 */
    listMovieTypes(){
      httpApi.cinemaApi.queryTypes().then(res=>{
        console.log(res)
        this.types = res.data.data
      })
    },

    /** 初始化地图 */
    initMap(){
      AMapLoader.load({
        key:"7bfbe3ab215345f405c23b5eed760ca8",             // 申请好的Web端开发者Key，首次调用 load 时必填
        version:"2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins:['AMap.Geocoder'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap)=>{
        this.map = new AMap.Map("container",{  //设置地图容器id
          viewMode:"3D",    //是否为3D地图模式
          zoom:11,           //初始化地图级别
          center:[116.397509,39.907644], //初始化地图中心点位置
        });
        // 为地图绑定点击事件
        this.map.on('click',(e)=>{
          let lng = e.lnglat.KL
          let lat = e.lnglat.kT
          console.log({e, lng, lat})
          // 通过AMap.Geocder，逆地理编码查询位置信息
          let geocoder = new AMap.Geocoder();
          geocoder.getAddress([lng, lat], (status, result)=>{
            console.log(status, result)
            // 表单的回填
            this.form.address = result.regeocode.formattedAddress
            let comp = result.regeocode.addressComponent
            this.form.province = comp.province
            this.form.city = comp.city ? comp.city : comp.province
            this.form.district = comp.district
            this.form.longitude = lng
            this.form.latitude = lat
          })
        })
      }).catch(e=>{
        console.log(e);
      })
    },
  },
};
</script>

<style lang="scss" scoped>
</style>