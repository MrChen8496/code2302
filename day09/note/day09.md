# Vue2Project DAY09

#### 实现排片计划列表业务

**需求：** 在放映厅列表页中，点击小眼睛， 跳转到排片计划列表页面。显示当前已经配置好的排片计划。

**实现思路：** 

1. 准备一个排片计划列表页面：`cinema/ShowingonPlanList.vue`，配置路由，使得访问： `/home/showingon-play-list?id=xxxx`可以看到它。传递放映厅的ID。
2. 在排片计划列表页面中，显示放映厅的基本信息。
3. 通过放映厅ID，加载并显示排片计划列表即可。



#### 控制排片计划的发布状态

通过两个接口来处理发布状态：

```
publish
no-publish
```



### 请求响应的统一业务异常处理

```javascript

// 针对instance处理统一的业务异常   基于响应拦截器
instance.interceptors.response.use((response)=>{
  // 统一异常处理 400业务状态码
  if(response.data.code==400){
    let errmsg = response.data.msg.details[0].message
    console.warn('请求参数有误，请检查:', errmsg)
    Notification.error({
      title:'注意', 
      message:'系统开小差了，等会试试吧！'
    })
  }
  return response;
})
```



设计描述座位模板的字符串：

```json
[
    [
        {x:0,y:0,name:'一排一号',type:'1'}, {x:0,y:1}, {}, {}.....
    ],
    [],
    [],
    .....
]
```

```
AAAAAAAAANNAAAAA
AAAAAAAAANNAAAAA
AAAAAAAAANNAAAAA
AAAAAAAAANNAAAAA
NNNNNNNNNNNNNNNN
AAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAA
AAAAAAAAAAAAAAAA
```



#### 实现登录业务

**需求：** 进入登录页面，输入账号密码，执行登录业务。成功后，进入首页。不登录不可看到项目内部的页面。不同权限的账号，看到的内容应该是不一样的。

**实现步骤：**

1. 准备一个登录页面：`views/user/Login.vue`。配置路由：

   **/user/login**时，看到该登录页面。 











































