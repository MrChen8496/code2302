# Vue DAY04

### Axios 

axios是一个网络通信库，封装了原生了ajax。提供了一些简单的API辅助程序员方便的发送http、https请求。底层基于Promise进行封装。

#### 在脚手架中安装axios

找到项目根目录，打开cmd，执行命令：

```shell
npm  install  axios
```

安装成功后，将会在package.json中生成axios的依赖项。

##### 基于axios发送GET请求

```javascript
import axios from 'axios'
let instance = axios.create()  
instance({
    url: '请求资源路径',
    method: 'GET',
    params: {name:'zs', pwd:'1234'}
}).then(res=>{
    res就是发送请求后，axios封装的响应数据
})
```

测试接口：

```
https://web.codeboy.com/bmdapi/movie-infos?page=1&pagesize=20
```



##### 基于axios发送POST请求

```javascript
import axios from 'axios'
let instance = axios.create()  
instance({
    url: '请求资源路径',
    method: 'POST',
    // post请求通过data来传递参数
    // data: 'page=1&pagesize=20&name=xxx',   传递普通kv参数
    // data: {page:1, pagesize:20},           传递json参数
}).then(res=>{
    res就是发送请求后，axios封装的响应数据
})
```

post请求参数的类型有很多种：

1. application/json     传递json字符串
2. x-www-form-urlenocded     普通的k=v&k=v
3. multipart/form-data    用于上传文件

**提供一个post请求的接口，用于通过关键字模糊查询电影列表**

```
接口地址：
https://web.codeboy.com/bmdapi/movie-infos/name
请求方式：
POST
请求参数：
page=1&pagesize=20&name=熊猫
```





### 封装Axios

由于axios官方提供的api使用频繁，细节太多，需要针对自己项目常用的场景进行一次封装，使得发请求更加方便。

**期望：**无论发送get还是post，不要写太多的代码，简单的调用一个get、post方法就行了。传递参数的时候也不要区分params、data等，直接传递对象即可。

```javascript
import myaxios from 'myaxios.js'

let params = {page:1, pagesize:20}
myaxios.get(url, params).then(res=>{})
myaxios.post(url, params).then(res=>{})
```



**课堂练习：**

模仿上述查询电影列表业务，根据下面的接口，加载演员列表。

```
接口地址：https://web.codeboy.com/bmdapi/movie-actors
请求方式：GET
请求参数：page=1&pagesize=10
返回结果：[演员对象组成的数组]
```

实现思路：新建一个组件：`views/Actors.vue`。当访问：/actors时，可以看到该页面。在页面中提供一个按钮，点击后加载所有的演员，以列表的方式显示。

1. 新建组件 `views/Actors.vue`，提供一个按钮。
2. 配置路由，访问`/actors`看到组件。
3. 给按钮绑定事件，点击后使用myaxios发送get请求，打印查询结果。



加载导演列表：

```
接口地址：https://web.codeboy.com/bmdapi/movie-directors
请求方式：GET
请求参数：page=1&pagesize=10
返回结果：[导演对象组成的数组]
```













