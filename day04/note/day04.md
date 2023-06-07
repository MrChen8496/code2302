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







