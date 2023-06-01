# Vue DAY05

#### Vue中的自定义组件

被Vue所管理的标签可以认为是vue的**组件**。在项目开发过程中经常会遇到一些需要**复用**的标签结构以及相应的样式、功能。vue提供了自定义组件的语法，可以让开发者将一些重复使用的页面结构、样式、功能组织一起，作为一个整体（新的组件）存在在项目中。这样如果需要使用这个组件时，直接引用即可使用自定义标签来显示。

```html
<person avatar="http:头像路径" name="人名"></person>
```



**如何设计并实现一个自定义组件？**

1. 新建自定义组件文件：`src/components/Person.vue`。

2. 在该文件中编写`template`、`script`、`style`代码。 

3. 当需要使用这个组件时，需要引入该组件，使用自定义标签来引用它，显示它。

   ```html
   <person></person>
   <abc></abc>
   <PersonInfo></PersonInfo>
   <person-info></person-info>
   ```

   ```javascript
   import Person from '@/components/Person.vue'
   export default {
       // components用于声明当前组件需要引用的子组件
       components: {
           // 属性名就是自定义标签名 :   属性值引用了Person对象
           Person: Person,
           abc: Person,
           PersonInfo: Person
       }
   }
   ```


#### 父组件向子组件传递自定义参数

```html
<person avatar="头像路径" name="人名"></person>
<person :avatar="头像路径" :name="人名"></person>
<person :data="{avatar:'1.jpg', name='张三'}"></person>
```

若子组件需要接收父组件传来的参数（为了动态显示组件内容），则需要在子组件中事先声明自定义属性，通过自定义属性来接收父组件传来的数据，从而实现相应的功能。

1. 在子组件中设计一些自定义属性：

   ```javascript
   export default { 
       // props选项用于定义当前组件的自定义属性 avatar name
       // 一旦定义了这些属性，则在使用当前组件时，就可以传参
       // <person avatar="a.jpg" name='张三' ></person>
       // <person avatar="b.jpg" name='李四' ></person>
       // <person avatar="c.jpg" name='王五' ></person>
       // <person avatar="d.jpg" name='赵六' ></person>
       props: ['avatar', 'name']
   }
   ```

2. 在使用子组件时，就可以给这些属性赋值（通过标签属性赋值的语法）：

   ```html
   <person avatar="头像路径" name="人名"></person>
   <person :avatar="变量a" :name="变量b"></person>
   ```



在组件声明自定义属性时，可以用一种相对详细的语法定义属性的细节：

```javascript
export default { 
    props: {
        name: {
            type: string,    // 指定属性的数据类型  
            default: '姓名'   // 没有指定name时的默认值
        },
        avatar: {
            type: string,
            required: true   // 要求该属性必填
        }
    }
}
```



案例：设计一个计数器组件，可以实现如下功能：

<img src="../../day03/note/assets/1685523465271.png" width="150px">

```html
<counter></counter>
<counter :value="25"></counter>
<counter :min="1" :max="10"></counter>
<counter :min="1" :max="10" :step="2"></counter>
```

1. 通过counter标签即可看到该组件。
2. 通过value属性，设置计数器的初始值。
3. 通过min定义最小值，通过max属性定义最大值。
4. 如果已经是最小值，则不能再减；同理，如果已经是最大值，则不能再加了。



#### 组件插槽（slot）

平时在设计子组件时，绝大多数的布局都已经在子组件中完成定义，但是有些布局需要在父组件使用子组件时动态设置，这时就可以使用**组件插槽**来实现。 在设计子组件时，可以在布局中定义一个插槽位置并给与基础样式，父组件在使用时，就可以动态设置需要显示的内容。

##### 默认插槽：

![1685585952111](../../day04/note/assets/1685585952111.png)

**实现步骤：**

1. 在子组件中的某一个位置，通过`<slot />`来指定插槽的位置。定义通用的基础布局样式。

   ```html
   <template>
     <div class="counter">
       <!-- 设计一个默认插槽位置 -->
       <slot />
       <span>{{n}}</span>
     </div>
   </template>
   ```

2. 在父组件使用子组件时，可以在组件标签内容部分设置插槽的具体内容：

   ```html
   <counter>
       <img src="@/assets/logo.png" height="25px">
   </counter>
   <counter>
       <p>插槽内容</p>
   </counter>
   ```


##### 具名插槽（带有名字的插槽）

如果一个子组件中有多个地方都需要父组件动态设置，则可以使用**具名插槽**来实现。顾名思义，可以给每一个插槽设置一个名字，父组件在动态设置时就可以指定不同的插槽位置进行内容设置。

![1685587051665](../../day04/note/assets/1685587051665.png)

**实现步骤：**

1. 在子组件中定义插槽（通过`<slot name=''>`标签），并且为每一个插槽设置一个name属性：

   ```html
   <template>
     <div class="counter">
       <span>
         <slot name="label"/>
         {{n}}
         <slot name="unit"/>
       </span>
     </div>
   </template>
   ```

2. 当使用该子组件时，就可以通过为标签设置slot属性，来明确到底放到子组件的哪一个插槽中：

   ```html
   <counter>
       <b slot="label">墨水:</b>
       <b slot="unit">瓶</b>
   </counter>
   <counter>
       <b slot="label">练习题:</b>
       <b slot="unit">套</b>
   </counter>
   ```



