# Vue2Project DAY01

#### 基于嵌套路由实现main部分内容的动态更新

```
http://localhost:8080/component/container
http://localhost:8080/component/form
http://localhost:8080/component/table
```

**设计嵌套路由：**

```
当访问：http://localhost:8080/component/container
      看到Component组件中嵌套Container组件
http://localhost:8080/component/form
      看到Component组件中嵌套Form组件
http://localhost:8080/component/table
      看到Component组件中嵌套Table组件
```

**实现步骤：**

1. 先创建3个子组件：Container.vue    Table.vue     Form.vue  

2. 在router/index.js中配置嵌套路由（为了实现上述目标进行配置。配置children）

3. 在el-main里添加一个二级路由占位符：`<router-view/>`

4. 测试：

   ```
   http://localhost:8080/component/container
   http://localhost:8080/component/form
   http://localhost:8080/component/table
   ```



#### 动态加载左侧边栏菜单列表

未来不同的用户有可能看到的侧边栏列表也不同，所以左侧边栏的内容极有可能是发请求从后端动态加载，通过v-for遍历显示的。例如，发送一个请求，获取当前用户可以看到的侧边栏菜单信息，得到如下json：

```json
[
    {
        path: '/component/container',
        icon: 'el-icon-menu',
        text: 'Container组件'
    },
    {
        path: '/component/table',
        icon: 'el-icon-s-data',
        text: 'table组件'
    },
    {
        path: '/component/form',
        icon: 'el-icon-edit-outline',
        text: 'form组件'
    },
]
```

通过v-for即可动态加载。值得一提的是：**不同的用户返回的json有可能不同**。

如果后端返回的数据包含子菜单项，如下json：

```json
[
    {
        path: '/component/index',
        icon: 'el-icon-s-home',
        text: '首页'
    },
    {
    	path: '/components',
        icon: 'el-icon-menu',
        text: '常用组件',
        children: [
            {
                path: '/component/container',
                icon: 'el-icon-menu',
                text: 'Container组件'
            },
            {
                path: '/component/table',
                icon: 'el-icon-s-data',
                text: 'table组件'
            },
            {
                path: '/component/form',
                icon: 'el-icon-edit-outline',
                text: 'form组件'
            },
        ]
    },
]
```












