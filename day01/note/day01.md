# Vue3Project DAY01

### Vue 数据监听的原理

Vue的核心功能就是当被vue管理的数据有了变化后，将会及时的更新UI。到底如何实现修改变量或对象的属性后，UI可以及时更新？

1. vue2中使用`Object.defineProperties()`监听对象属性的变化。 
2. vue3中使用`new Proxy()`为目标对象请一个代理对象，一个代理对象可以管理一整个对象的属性，减少了属性监听器的创建，优化新能。



#### vue2数据监听的简单实现

vue2中使用`Object.defineProperties()`监听对象属性的变化。 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>vuedemo.html</title>
</head>
<body>
  <h1>Vue2数据监听</h1>
  <h2 id="h1">1</h2>
  <button id="btn1">点我后，数字++</button>
  <script>
    var data = {
      num: 1
    }
    // 为data定义属性监听，一旦data对象中属性有变化就更新UI
    Object.defineProperties(data, {
      _num: {value:1, writable:true},
      // 对data的num属性进行监听
      num: {
        // 当外部访问data的num属性时，就会执行该get方法
        get(){
          return this._num
        },
        // 当外部修改data的num属性时，就会执行该set方法，并传入参数
        set(value){
          this._num = value
          // 修改掉num值的同时，此处还可以顺便更新UI
          h1.innerHTML = value
        }
      }
    })

    btn1.onclick = function(){
      data.num++
    }

  </script>
</body>
</html>
```

#### vue3的代理模式的简单实现




























