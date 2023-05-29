# Vue DAY02

### MVVM架构

M - Model层    业务逻辑层     主要用于管理数据，实现业务

V - View层     视图层                主要用于将数据显示在页面上

VM -  ViewModel层   视图模型层          主要用于业务逻辑与视图的联动 （Vue来做）

![1685324464410](../../day01/note/assets/1685324464410.png)



### 基于脚手架环境开发vue项目

开发vue项目有两种模式：

1. 基于vue.js，在html页面中引入vue.js， 让vue.js管理div#app元素。
2. 基于脚手架环境：通过vue脚手架环境可以方便的创建一个通用的vue项目框架模板，在此基础之上开发vue项目更加快捷，适合工程化开发。



#### VueCLI脚手架开发环境

https://cli.vuejs.org/

##### 安装脚手架 

```shell
# 设置npm源地址  
npm set registry https://registry.npmmirror.com

# 安装脚手架
npm install -g @vue/cli
```

**安装配置VueCLI，通过VueCLI创建项目的过程，详情查看：**

```
ftp目录/VueBasic/day02/resource/VueCLI_installation_guide.pdf
```

找一个干净地方，新建项目包：

```shell
# day02/demo/
vue  create   vue-project
```

一旦项目创建完毕后，即可通过命令，启动脚手架项目（端口为8080的服务），提供网站的访问。

```shell
npm run serve
```

打开浏览器：`http://localhost:8080/`













------

作业：建10个项目





















