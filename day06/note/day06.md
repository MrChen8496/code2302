# Vue2Project DAY06

#### 实现新增电影业务

**业务需求：**点击新增电影菜单，看到一个表单，填写后点击提交，新增成功。

**实现步骤：**

1. 准备好一个静态页面，包含一个大表单， 9个表单项。
2. 针对每一个表单项处理收集的数据。
3. 点击提交按钮，实现新增业务。
4. 添加表单验证。



##### 处理电影类型字段的数据收集

电影类型列表从服务端获取，应该支持多选。

1. 先去发请求，获取所有的电影类型列表，更新下拉列表项。

   mounted     myaxios    httpApi   movieApi    queryTypes()   

   el-option    v-for     :label   :value

2. 设置支持多选。

3. 双向数据绑定，关联`form.type`。



### `WangEditor`富文本编辑器

1. 安装：

   ```shell
   npm install @wangeditor/editor --save
   npm install @wangeditor/editor-for-vue --save
   ```

2. 在组件的template中，使用Toolbar与Editor组件显示富文本编辑器：

   ```html
   <div style="border: 1px solid #ccc;">
       <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editor"
                :defaultConfig="toolbarConfig"
                :mode="mode"
                />
       <Editor
               style="height: 500px; overflow-y: hidden;"
               v-model="html"
               :defaultConfig="editorConfig"
               :mode="mode"
               @onCreated="onCreated"
               />
   </div>
   ```

3. 在data与methods中准备好所需要的变量及方法：

   ```html
   <script>
   import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
   
   export default Vue.extend({
       components: { Editor, Toolbar },
       data() {
           return {
               editor: null,
               html: '<p>hello</p>',
               toolbarConfig: { },
               editorConfig: { placeholder: '请输入内容...' },
               mode: 'default', // or 'simple'
           }
       },
       methods: {
           onCreated(editor) {
               this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
           },
       },
       mounted() {
           // 模拟 ajax 请求，异步渲染编辑器
           setTimeout(() => {
               this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
           }, 1500)
       },
       beforeDestroy() {
           const editor = this.editor
           if (editor == null) return
           editor.destroy() // 组件销毁时，及时销毁编辑器
       }
   })
   </script>
   ```


#### 实现电影的修改业务

**业务需求：** 点击列表中的修改按钮，跳转到修改电影页面，在修改电影页面的表单中显示该电影的基本信息（回填），在这些信息的基础之上进行修改，点击确认更新按钮，提交更新请求，更新电影数据。

**实现思路：**

1. 先准备一个修改电影页面（与新增页面雷同）：`MovieUpdate.vue。` 

2. 点击修改按钮时，跳转到修改电影页面。（注意传参） `/home/movie-update`

   ```
   /home/movie-update/1
   ```

   ```
   /home/movie-update?id=1
   ```

3. 修改电影页面，先发送请求，加载详情，回填表单。

4. 用户修改信息，点击确认修改，发送请求，修改电影数据。

5. 根据修改结果执行后续业务。














