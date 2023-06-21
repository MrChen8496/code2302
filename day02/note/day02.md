# Vue3Project DAY02

### VueCLI项目中关于图片的处理

项目中所需要使用的图片可以存放在public下，也可以存放在src下（一般放在src/assets里）。

#### 如果将图片放在src下的assets中

需要通过相对路径来访问到该图片：

```html
<img src="../assets/index.png">
<img src="@/assets/index.png">
```

脚手架将会在运行时编译src下的所有资源。脚手架项目一定要经过编译（将src下的源码资源文件转换成浏览器所能解析的html、css、js的过程）才可以正常运行。

```shell
npm  run  build
```

在项目编译过程中，对于src下的图片有一些特殊处理。脚手架在编译项目时，如果发现图片足够小，则将会把图片编译成base64的图片编码，直接赋值给src属性。**在页面显示时减少小图片的请求频率，优化性能。** 如果图片挺大，将会把图片重命名，放入一个`/img`目录统一管理。并且篡改src属性：`/img/xxxxx.xxx.jpg`。 

在编译打包时，这些较大的图片，将会直接打入`dist/img`目录中。 

#### 一个坑：

如果为图片的src添加了冒号，就意味着资源加载由程序员来管理，就不会出现上述的情况，设置为什么路径，src属性就会输出什么路径：

```html
<img :src="`../asset/index.png`">
```

如果出现了上述情况，脚手架将不会编译该路径，大概率是无法访问这一张图片的。

需要通过调用require方法，手动编译资源才行。

```html
<img :src="require(`../asset/index.png`)">
```



#### 如果将图片放在public中

public下的资源将会作为静态资源，直接打包到dist文件夹下，例如：

```
public 
  tabs
     index.png
```

可以如下访问：

```html
<img src="/tabs/index.png">
```

结论：public下的资源使用/开头，直接访问。



**思考问题**：什么样的图片适合放在public下，什么样的图片适合放在assets下？

项目中所必须使用的小图标适合放在assets，除此之外的其他图片都可以放在public。更多的情况会把一些图片放在静态图片服务器中。



### 搭建项目的基础结构

基础结构包含两部分：1.  主要内容   2. 底部选项卡

设计嵌套路由：

```
访问：/时， 看到HomeView.vue。  包含<router-view/>与底部选项卡。
```

子路由设计：

```
访问：/home/index，看到首页上半部分显示Index内容。views/index/Index.vue
访问：/home/video，看到首页上半部分显示Video内容。views/video/Video.vue
访问：/home/show，看到首页上半部分显示Show内容。  views/show/Show.vue
访问：/home/me，看到首页上半部分显示个人信息内容。 views/me/Me.vue
```

**实现步骤：**

1. 先创建四个新的组件，分别是：

   ```
   views/index/Index.vue
   views/video/Video.vue
   views/show/Show.vue
   views/me/Me.vue
   ```

2. 在/home下配置嵌套路由children，匹配上述路由设计。

3. 在HomeView.vue中设置二级路由占位符 `<router-view />`。 

4. 测试。



### 加载首页热映类别电影列表

**需求分析：** 当打开app首页，就可以看到热映类别下的首页电影列表数据。第一页，20条数据。点击待映、经典后，可以更新电影列表信息。

**实现步骤：**

1. 准备好后端服务：启动mysql、index.js、uploadserver.js。

2. 修改后端代码index.js，去掉token验证。重启index.js。

   ```
   http://localhost:3010/movie-infos/category?cid=1&page=1&pagesize=20
   ```

3. 在mounted生命周期方法中，发送http请求，加载首页热映类别下的电影数据。

   mounted     httpApi    MovieApi.js    res.data.data.result      ref()    interface    

4. 将列表数据显示在页面中。



#### vue3的生命周期

包含3个阶段，涉及到常用的6个生命周期钩子方法：

```
onBeforeMount
onMounted

onBeforeUpdate
onUpdated

onBeforeUnmount
onUnmounted
```



#### 当改变顶部导航的类别后，更新电影列表














