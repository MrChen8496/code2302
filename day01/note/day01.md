# Vue2Project DAY01

## Vue组件库

在开发vue项目的过程中，为了组件复用，一些大厂、开源组织一起开发了一整套网站常用的组件，功能强大，ui美观，这些组件最终组成了一整套的组件库。

1. 饿了么团队开发的一套基于PC端的Vue组件库：ElementUI

   ```
   ElementUI (Vue2): 
      https://element.eleme.io/#/zh-CN/component/installation 
      
   Element-plus(Vue3):
      https://element-plus.gitee.io/zh-CN/component/button.html
   ```

2. 有赞团队开发了一套基于移动端的Vue组件库：Vant。

   ```
   https://vant-contrib.gitee.io/vant/v2/#/zh-CN/
   ```

3. iview (PC端)

   ```
   http://v2.iviewui.com/
   ```


## ElementUI

https://element.eleme.io/#/zh-CN/component/installation 

### 在脚手架项目中配置使用ElementUI

1. 安装lementUI

   ```shell
   npm i element-ui -S
   ```

2. 在main.js中全量引入ElementUI组件：

   ```javascript
   import ElementUI from 'element-ui';
   import 'element-ui/lib/theme-chalk/index.css';
   Vue.use(ElementUI);
   ```

3. 使用组件即可：

   ```html
   <template>
   	<div>
           <el-button>按钮</el-button>
       </div>
   </template>
   ```

**思考：ElementUI适合写什么样的网站？**

适合写后台管理网站。敏捷开发，不需要专门设计UI，但是要有强功能。



### `ElementUI`的常用组件

#### `NavMenu`组件

NavMenu用于在页面中显示一个导航，支持水平垂直。基本写法如下：

```html
<el-menu mode="horizontal">
	<el-menu-item>列表项</el-menu-item>
	<el-menu-item>列表项</el-menu-item>
	<el-menu-item>列表项</el-menu-item>
	<el-menu-item>列表项</el-menu-item>
</el-menu>
```

案例：写一个组件：views/Nav.vue，当访问/nav时看到该组件。测试上述el-menu组件效果。



##### 设置默认状态

```html
<el-menu mode="horizontal" :default-active="activeIndex">
	<el-menu-item index="1">列表项</el-menu-item>
	<el-menu-item index="2">列表项</el-menu-item>
	<el-menu-item index="3">列表项</el-menu-item>
	<el-menu-item index="4">列表项</el-menu-item>
</el-menu>
```

```javascript
data(){
    return {
        activeIndex: '1'
    }
}
```



##### 实现设置子菜单

```html
<el-menu mode="horizontal" :default-active="activeIndex">
	<el-menu-item index="1">列表项</el-menu-item>
	<el-submenu index="2">
        列表项
        <el-menu-item index="2-1">列表项2-1</el-menu-item>
        <el-menu-item index="2-2">列表项2-2</el-menu-item>
	</el-submenu>
	<el-menu-item index="3">列表项</el-menu-item>
	<el-menu-item index="4">列表项</el-menu-item>
</el-menu>
```



##### 显示垂直导航菜单

```html
<el-menu :default-active="activeIndex">
	<el-menu-item index="1">列表项</el-menu-item>
	<el-menu-item index="2">列表项</el-menu-item>
	<el-menu-item index="3">列表项</el-menu-item>
	<el-menu-item index="4">列表项</el-menu-item>
</el-menu>
```



**使用组件库时，修改组件库中组件的默认样式的方式主要有以下几种：**

1. 先去组件库中找，是否组件已经提供了一个属性可以满足样式自定义的需求，如果有优先使用组件库提供的修改方案来修改样式。
2. 为组件添加class属性，通过`<style>`代码段定义样式。
3. 为组件添加style属性，设置内联样式。
4. 右键目标组件，查看目标组件的样式到底是哪一些css代码定义的，找出相应选择器的名字，重写该样式。如果修改不生效，可以尝试使用`!important`提高优先级。





