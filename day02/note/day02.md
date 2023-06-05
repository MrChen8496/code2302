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


















