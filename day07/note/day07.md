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








