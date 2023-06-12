# Vue2Project DAY07

#### 封装面包屑导航

不同的请求路径应该显示不同的导航信息，如果希望在HomeView中动态显示面包屑导航，就需要将相应的面包屑导航数据与相应的路由对象绑定在一起。vueRouter提供了一种解决方案 -- Router meta方案，可以让程序在路由对象中配置自定义的信息：

`router/index.js`文件：

```javascript
{
    path: '/home/actor-list',
    name: '/home/actor-list',
    component: ActorList,
    meta: {   // 元信息   用于定义一些自定义数据，将于当前route对象绑定在一起
    	thumbs: ['演员管理', '演员列表'],
    }
}
```

```
this.$route.meta.thumbs  ->  ['演员管理', '演员列表']
```



#### 实现新增电影院功能模块

**需求分析：**提供一个表单页面，以地图的方式选择坐标位置，回填表单，简化填写表单的步骤，点击提交按钮，添加电影院。

**实现步骤：**

1. 准备好侧边菜单：电影院管理：电影院列表，新增电影院。新建组件、配置路由。

   ```
   /home/cinema-add      views/cinema/CinemaAdd.vue
   /home/cinema-list      views/cinema/CinemaList.vue
   ```

2. 提供CinemaAdd.vue的静态页面（表单）。

3. 为地图绑定点击事件，点击后获取经纬度。

4. 通过经纬度，访问高德地图位置服务，获取详细文本描述。（逆地理编码）

5. 回填表单。

6. 选择标签（多选）。

   提供一个接口，查询所有影院类型。以下拉列表的方式显示。

   mounted  CinemaApi.js   res.data       ` <el-option v-for="" >`  

   用户选择标签。

7. 点击确认新增，提交新增请求。



### 在`VueCLI`项目中使用高德地图

`lbs.amap.com` 

`https://lbs.amap.com/api/javascript-api-v2/guide/abc/amap-vue`



#### 实现影院列表页面相关业务

**业务需求：**点击影院列表菜单项，在页面中显示列表数据，提供地图查看功能。点击定位按钮后可以在地图中显示该影院的位置。

**实现步骤：**

1. 准备静态页面。地图容器`div`， `el-table`。
2. 页面挂载完毕后，发送请求，加载所有的影院信息。
3. 使用`el-table`显示影院列表数据。
4. 显示地图区域。
5. 点击定位按钮后，在地图中显示该影院的具体位置。
























