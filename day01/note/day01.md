# Vue DAY01

徐铭     xuming@tedu.cn     15201603213

### 阶段内容

Vue基础  框架开发基础

vue2与组件库      百慕大影城后台项目开发

Typescript + OOP

Vue3与组件库   百慕大影城前台项目开发

**学习目标：**

前三个阶段重点在于掌握核心基础知识点。

后两个阶段重点在于培养：理解一个合理的业务功能需求，从记忆的深处找到需要的知识点，连接起来形成一段完整代码的**能力**。学习方法：课上重点在于听，课下重点在于练。上课出错不害怕，有异常多翻译，课上先听，课下再调。



## Vue

web三大框架之一：vue、react、angular

现阶段，vue有3个大版本：

vue1：淘汰

vue2：过渡期，正在逐步转向vue3。

vue3：主推版本，以后的主流。



https://v2.cn.vuejs.org/   Vue2官方文档 

https://v2.cn.vuejs.org/v2/guide/installation.html     vue2安装页面，点击**开发版本**按钮，下载 vue.js 



### 使用Vue开发web应用的编程方式

传统的dom操作或jquery的开发模式，如果需要更新DOM：

```html
<div id="info">欢迎：<span id="name">张三</span></div>
```

```javascript
$('#info').text('欢迎：李四')
$('#name').text('王五')
```

传统的写法，讲究的是通过选择器找到页面中符合条件的DOM元素，修改它的属性。

**Vue的写法：**

```html
<div>欢迎：{{name}}</div>
<div>欢迎：{{name}}</div>
<div>欢迎：{{name}}</div>
<div>欢迎：{{name}}</div>
<div>欢迎：{{name}}</div>
```

```javascript
// 创建Vue对象来管理DOM树
new Vue({
    data: {
        name: '张三'
    }
})
```

如上定义的name变量，将会直接显示在页面中，如果通过程序修改了name的值，则页面将会及时刷新。

**第一个vue案例：写个电影详情页**

实现步骤：

1. 准备一个html页面，下载并引入vue.js。
2. 编写代码，基于vue的声明式的语法，完成电影详情内容的展示。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>vue01.html</title>
  <script src="./js/vue.js"></script>
</head>
<body>
  <div id="app">
    <img height="200" src="https://p0.pipi.cn/mmdb/fb7386877e151bb86050152b2c2508b05f0e0.jpg?imageView2/1/w/464/h/644" alt="">
    <h3>电影名称：{{ movie.name }}</h3>
    <h3>电影时长：{{ movie.duration }}分钟</h3>
    <h3>上映时间：{{ movie.showingon }}</h3>
  </div>
  <script>
    // 创建Vue对象来管理页面元素
    new Vue({
      // data选项用于定义页面中需要显示的一些变量
      data: {
        movie: {
          name: '速度与激情10',
          type: '动作 / 剧情',
          duration: 112,
          showingon: '2023-05-17'
        }
      },
      el: '#app',  // 该属性用于告诉Vue，管理页面中的哪个DOM
    })
  </script>
</body>
</html>
```



#### 未来传代码的方式

`gitee`。白天写的代码都会上传到远程仓库。大家可以通过网址直接去仓库中找每一节课的代码，看日志。晚上复习用。每天晚上将代码和笔记打包上传到ftp。



将代码上传到远程仓库：

1. 去gitee网站创建仓库。code2302
2. 初始化本地仓库目录，提交到本地仓库。
3. 为本地仓库添加远程仓库路径origin。
4. 将本地仓库的版本上传至远程仓库，并开源远程仓库即可。



https://gitee.com/mingxuchn/code2302

保存到收藏夹中



#### vue中的插值语法

```html
<span>{{ js表达式 }}</span>
```

在js表达式中可以直接访问vue对象里data选项声明的变量，也可以进行数据的运算，方法的调用。

### 使用了Vue.js的网页执行流程

浏览器从上到下加载普通的html页面，通过script引入vue.js，浏览器将会加载vue.js脚本。

接下来继续加载body中的dom，加载完毕后了解到所有的DOM元素。

末尾加载script，在该script中通过new Vue()的方式创建Vue对象，让Vue对象来接管#app中需要显示的内容。Vue将会按照自己的方式显示#app中的内容：当vue识别出`{{}}`后，将会当做js代码段来执行，进而访问到vue中的变量，动态显示页面内容。



vue在背后做了大量的工作，通过声明式的语法在data中声明变量，这些变量将于页面中引用该变量的DOM元素建立强关联，data中声明的这些变量将会拥有**响应式**的特点（一旦data中的这些变量值被程序所修改，则vue将会操作强关联的DOM元素，自动更新），而不需要程序员先找到某个元素，然后手动更新。



