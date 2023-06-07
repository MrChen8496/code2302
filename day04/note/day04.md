# Vue2Project DAY04

#### 在搜索框中敲回车，实现模糊查询的业务

```html
<el-input @keyup.native.enter=""></el-input>
```





### Vue的事件修饰符

在Vue中，为html标签绑定事件的方式：

```html
<button @click="doClick"></button>
```

Vue将会为button标签，绑定原生的鼠标单击事件，一旦触发该事件，则执行doClick()。但是如果为自定义组件绑定事件：

```html
<el-input @blur="" @focus="" @keyup=""></el-input>
```

Vue将会把这些事件当做是el-input组件底层抛出的自定义事件，不会当做是dom原生事件来进行绑定，所以，默认情况下焦点失去、获取、键盘抬起时不会触发这些事件。所以需要如下：

```html
<el-input @blur.native="" 
          @focus.native="" 
          @keyup.native=""></el-input>
```

`.native`属于vue提供的**事件修饰符**，写在事件类型的后面就可以生效，作用就是告诉vue，当前事件就是原生的dom事件，不要当做是组件的自定义事件，这样当焦点失去、获取、键盘抬起时就会触发，执行相应方法。

Vue认为，事件处理函数内部更多的代码应该聚焦在业务功能的实现上，而不是某些琐碎的事件对象处理上。所以vue提供了很多事件修饰符来帮助简化这些代码。

```html
<button @click.stop=""></button>   stop可以阻止事件冒泡
<a href="#" @click.prevent=""></a>  prevent可以阻止浏览器的默认行为（不跳转）
<button @click.once=""></button>  该事件仅触发一次
<input @keyup.enter="">
<input @keyup.page-down="">
<input @keyup.delete="">
```



#### 实现新增演员业务

**功能需求：**填写新增演员表单，选择一张图片作为头像，立即上传，得到头像路径，点击新增后，将名字与头像路径传给后端新增到数据库。

1. 准备好静态页面。表单。
2. 实现上传业务，上传成功后，需要整理好演员信息： {actorName:xxx,  actorAvatar:xxx}
3. 点击新增演员按钮，再次发送请求，将演员信息添加到数据库即可。



### 实现导演模块相关业务

1. 在HomeView.vue中为左侧边栏菜单添加一个子菜单：**导演管理** - 导演列表、新增导演。

2. 点击之后，分别显示`DirectorList.vue`   `DirectorAdd.vue`。需要编写组件并且配置嵌套路由。

3. 由于导演模块的这两个页面与演员模块的两个页面功能类似，复制粘贴改一下即可。

   Ctrl+F，查找替换：

   ```
   演员 > 导演
   actor  >  director
   Actor  >  Director
   ```


#### 实现演员与导演的删除

![1686122202225](../../day03/note/assets/1686122202225.png)

如上图发现对于Person组件，仅仅希望使用它封装的页面结构，但是不同的父组件点击了叉子之后所做的事情也是不同的，所以不能直接将删除的业务代码写在子组件里。此处适合使用Vue自定义组件的 **自定义事件**来实现。

子组件可以自发的抛出一个自定义事件，父组件可以捕获这个自定义事件并处理。

如何实现自定义事件？

**父组件：**

```html
<person name="" avatar=""></person>
```

**子组件：**

```html
<template>
	<button @click="del">删除</button>
</template>
<script>
    ....
    methods: {
        del(){
            //此处主动抛出一个自定义事件，事件类型名完全自定义 
            this.$emit('delPerson')
        }
    }
    ...
</script>
```









