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



### 在`VueCLI`项目中使用高德地图

`lbs.amap.com` 

`https://lbs.amap.com/api/javascript-api-v2/guide/abc/amap-vue`




























