# Vue3Project  DAY04

发现了项目中的一个问题：当从首页的经典列表中选择电影进入详情页后，点击返回回到首页时，首页将会刷新（将恢复成热映列表首页信息）。因为从首页跳转详情时，将会销毁首页组件；当返回上一页，回到首页时，将会重新创建一个新的首页组件并显示（这时将会重新执行onMounted方法，初始化列表数据）。

**在开发过程中可能会有以下需求：首页跳转到详情页时不要销毁首页，在内存中待着就行，等会返回的时候不要创建新的首页组件，直接用上次缓存下来的即可，这样就可以保留首页的状态（已经加载过的数据、滚动条的位置等等）**。

这就需要使用Vue提供的KeepAlive机制来实现。



### `KeepAlive`保活机制

```html
<!-- 使用KeepAlive缓存组件实例 -->
<!-- Component表示的就是当前正在显示的路由组件 -->
<router-view v-slot="{Component}">
    <keep-alive>
        <component :is="Component" />
    </keep-alive>
</router-view>
```

一旦结合了RouterView实现了路由组件的保活，意味着所有相关的路由跳转流程会将没个路由组件都缓存下来。缓存下来的组件再次显示时将不会执行onMounted声明周期。

所以发现：有些组件需要缓存，有些组件不能缓存。可以通过自定义路由的meta，来指定哪些组件需要保活，哪些不需要：

```javascript
{
    path: 'index',
    component: () => import('../views/index/IndexView.vue'),
    meta: {
    	keepAlive: true  // 声明了keepAlive就代表当前组件需要保活  
    }
}
```

然后通过v-if来控制将那些需要保活的组件放在`keep-alive`内部加载，否则放在`keep-alive`的外面加载即可。

```html
<!-- Component表示的就是当前正在显示的路由组件 -->
<router-view v-slot="{Component}">
    <keep-alive>
        <component v-if="$route.meta.keepAlive" :is="Component" />
    </keep-alive>
    <component v-if="!$route.meta.keepAlive" :is="Component" />
</router-view>
```

#### keepAlive涉及到的生命周期

被keepAlive所包裹的组件将会被缓存，当组件A跳转到组件B时，不会销毁A组件（不会执行A的unMount生命周期），当从B组件回到A组件时，也不会重新挂载A组件（不会执行onMounted声明周期）。

如果出现上述A组件的情况，虽然不执行unMount与Mounted生命周期，但是vue提供了两个新的声明周期方法用于监听组件的激活（看到组件）与失活（组件移除）。

> activated       当重新看到A组件时，执行
>
> deactivated  当A组件失活时（移除UI），执行
















