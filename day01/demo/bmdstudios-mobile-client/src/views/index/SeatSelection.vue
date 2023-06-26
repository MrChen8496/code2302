<template>
    <div class="container">
      <!-- 顶部导航栏 -->
      <van-nav-bar title="东星国际影城" left-arrow></van-nav-bar>
      
      <!-- 广告 -->
      <app-header></app-header>

      <!-- 选座面板 -->
      <div class="seat-selection-panel" v-html="htmlContent" @click.native="chooseSeat"></div>
      
      <!-- 底部状态栏 -->
      <div class="selection-result">
        <div class="status">
          <div class="seat-noselect"></div>
          <span>可选</span>
          <div class="seat-selected"></div>
          <span>已售</span>
        </div>
        <div class="info">
          <van-notice-bar
            left-icon="volume-o"
            text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
          />
          <div class="content">
            <p class="title">万里归途</p>
            <p class="desc">周一 10月07日 22:10-00:27</p>
          </div>
        </div>
        <van-button color="#f03d37" disabled block round>请先选座</van-button>
      </div>

    </div>
</template>

<script setup lang="ts">
import {ref, reactive, onMounted} from 'vue'
let data = [[{"x":0,"y":0,"type":2,"selected":false},{"x":0,"y":1,"type":2,"selected":false},{"x":0,"y":2,"type":2,"selected":false},{"x":0,"y":3,"type":2,"selected":false},{"x":0,"y":4,"type":1,"selected":false,"name":"1排1号"},{"x":0,"y":5,"type":1,"selected":false,"name":"1排2号"},{"x":0,"y":6,"type":1,"selected":false,"name":"1排3号"},{"x":0,"y":7,"type":1,"selected":false,"name":"1排4号"},{"x":0,"y":8,"type":1,"selected":false,"name":"1排5号"},{"x":0,"y":9,"type":2,"selected":false},{"x":0,"y":10,"type":2,"selected":false},{"x":0,"y":11,"type":1,"selected":false,"name":"1排6号"},{"x":0,"y":12,"type":1,"selected":false,"name":"1排7号"},{"x":0,"y":13,"type":1,"selected":false,"name":"1排8号"},{"x":0,"y":14,"type":1,"selected":false,"name":"1排9号"},{"x":0,"y":15,"type":1,"selected":false,"name":"1排10号"},{"x":0,"y":16,"type":2,"selected":false},{"x":0,"y":17,"type":2,"selected":false},{"x":0,"y":18,"type":2,"selected":false},{"x":0,"y":19,"type":2,"selected":false}],[{"x":1,"y":0,"type":2,"selected":false},{"x":1,"y":1,"type":2,"selected":false},{"x":1,"y":2,"type":1,"selected":false,"name":"2排1号"},{"x":1,"y":3,"type":1,"selected":false,"name":"2排2号"},{"x":1,"y":4,"type":1,"selected":false,"name":"2排3号"},{"x":1,"y":5,"type":1,"selected":false,"name":"2排4号"},{"x":1,"y":6,"type":1,"selected":false,"name":"2排5号"},{"x":1,"y":7,"type":1,"selected":false,"name":"2排6号"},{"x":1,"y":8,"type":1,"selected":false,"name":"2排7号"},{"x":1,"y":9,"type":2,"selected":false},{"x":1,"y":10,"type":2,"selected":false},{"x":1,"y":11,"type":1,"selected":false,"name":"2排8号"},{"x":1,"y":12,"type":1,"selected":false,"name":"2排9号"},{"x":1,"y":13,"type":1,"selected":false,"name":"2排10号"},{"x":1,"y":14,"type":1,"selected":false,"name":"2排11号"},{"x":1,"y":15,"type":1,"selected":false,"name":"2排12号"},{"x":1,"y":16,"type":1,"selected":false,"name":"2排13号"},{"x":1,"y":17,"type":1,"selected":false,"name":"2排14号"},{"x":1,"y":18,"type":2,"selected":false},{"x":1,"y":19,"type":2,"selected":false}],[{"x":2,"y":0,"type":2,"selected":false},{"x":2,"y":1,"type":1,"selected":false,"name":"3排1号"},{"x":2,"y":2,"type":1,"selected":false,"name":"3排2号"},{"x":2,"y":3,"type":1,"selected":false,"name":"3排3号"},{"x":2,"y":4,"type":1,"selected":false,"name":"3排4号"},{"x":2,"y":5,"type":1,"selected":false,"name":"3排5号"},{"x":2,"y":6,"type":1,"selected":false,"name":"3排6号"},{"x":2,"y":7,"type":1,"selected":false,"name":"3排7号"},{"x":2,"y":8,"type":1,"selected":false,"name":"3排8号"},{"x":2,"y":9,"type":2,"selected":false},{"x":2,"y":10,"type":2,"selected":false},{"x":2,"y":11,"type":1,"selected":false,"name":"3排9号"},{"x":2,"y":12,"type":1,"selected":false,"name":"3排10号"},{"x":2,"y":13,"type":1,"selected":false,"name":"3排11号"},{"x":2,"y":14,"type":1,"selected":false,"name":"3排12号"},{"x":2,"y":15,"type":1,"selected":false,"name":"3排13号"},{"x":2,"y":16,"type":1,"selected":false,"name":"3排14号"},{"x":2,"y":17,"type":1,"selected":false,"name":"3排15号"},{"x":2,"y":18,"type":1,"selected":false,"name":"3排16号"},{"x":2,"y":19,"type":2,"selected":false}],[{"x":3,"y":0,"type":1,"selected":false,"name":"4排1号"},{"x":3,"y":1,"type":1,"selected":false,"name":"4排2号"},{"x":3,"y":2,"type":1,"selected":false,"name":"4排3号"},{"x":3,"y":3,"type":1,"selected":false,"name":"4排4号"},{"x":3,"y":4,"type":1,"selected":false,"name":"4排5号"},{"x":3,"y":5,"type":1,"selected":false,"name":"4排6号"},{"x":3,"y":6,"type":1,"selected":false,"name":"4排7号"},{"x":3,"y":7,"type":1,"selected":false,"name":"4排8号"},{"x":3,"y":8,"type":1,"selected":false,"name":"4排9号"},{"x":3,"y":9,"type":2,"selected":false},{"x":3,"y":10,"type":2,"selected":false},{"x":3,"y":11,"type":1,"selected":false,"name":"4排10号"},{"x":3,"y":12,"type":1,"selected":false,"name":"4排11号"},{"x":3,"y":13,"type":1,"selected":false,"name":"4排12号"},{"x":3,"y":14,"type":1,"selected":false,"name":"4排13号"},{"x":3,"y":15,"type":1,"selected":false,"name":"4排14号"},{"x":3,"y":16,"type":1,"selected":false,"name":"4排15号"},{"x":3,"y":17,"type":1,"selected":false,"name":"4排16号"},{"x":3,"y":18,"type":1,"selected":false,"name":"4排17号"},{"x":3,"y":19,"type":1,"selected":false,"name":"4排18号"}],[{"x":4,"y":0,"type":1,"selected":false,"name":"5排1号"},{"x":4,"y":1,"type":1,"selected":false,"name":"5排2号"},{"x":4,"y":2,"type":1,"selected":false,"name":"5排3号"},{"x":4,"y":3,"type":1,"selected":false,"name":"5排4号"},{"x":4,"y":4,"type":1,"selected":false,"name":"5排5号"},{"x":4,"y":5,"type":1,"selected":false,"name":"5排6号"},{"x":4,"y":6,"type":1,"selected":false,"name":"5排7号"},{"x":4,"y":7,"type":1,"selected":false,"name":"5排8号"},{"x":4,"y":8,"type":2,"selected":false},{"x":4,"y":9,"type":2,"selected":false},{"x":4,"y":10,"type":2,"selected":false},{"x":4,"y":11,"type":2,"selected":false},{"x":4,"y":12,"type":1,"selected":false,"name":"5排9号"},{"x":4,"y":13,"type":1,"selected":false,"name":"5排10号"},{"x":4,"y":14,"type":1,"selected":false,"name":"5排11号"},{"x":4,"y":15,"type":1,"selected":false,"name":"5排12号"},{"x":4,"y":16,"type":1,"selected":false,"name":"5排13号"},{"x":4,"y":17,"type":1,"selected":false,"name":"5排14号"},{"x":4,"y":18,"type":1,"selected":false,"name":"5排15号"},{"x":4,"y":19,"type":1,"selected":false,"name":"5排16号"}],[{"x":5,"y":0,"type":2,"selected":false},{"x":5,"y":1,"type":2,"selected":false},{"x":5,"y":2,"type":2,"selected":false},{"x":5,"y":3,"type":2,"selected":false},{"x":5,"y":4,"type":2,"selected":false},{"x":5,"y":5,"type":2,"selected":false},{"x":5,"y":6,"type":2,"selected":false},{"x":5,"y":7,"type":2,"selected":false},{"x":5,"y":8,"type":2,"selected":false},{"x":5,"y":9,"type":2,"selected":false},{"x":5,"y":10,"type":2,"selected":false},{"x":5,"y":11,"type":2,"selected":false},{"x":5,"y":12,"type":2,"selected":false},{"x":5,"y":13,"type":2,"selected":false},{"x":5,"y":14,"type":2,"selected":false},{"x":5,"y":15,"type":2,"selected":false},{"x":5,"y":16,"type":2,"selected":false},{"x":5,"y":17,"type":2,"selected":false},{"x":5,"y":18,"type":2,"selected":false},{"x":5,"y":19,"type":2,"selected":false}],[{"x":6,"y":0,"type":1,"selected":false,"name":"6排1号"},{"x":6,"y":1,"type":1,"selected":false,"name":"6排2号"},{"x":6,"y":2,"type":1,"selected":false,"name":"6排3号"},{"x":6,"y":3,"type":1,"selected":false,"name":"6排4号"},{"x":6,"y":4,"type":1,"selected":false,"name":"6排5号"},{"x":6,"y":5,"type":1,"selected":false,"name":"6排6号"},{"x":6,"y":6,"type":1,"selected":false,"name":"6排7号"},{"x":6,"y":7,"type":1,"selected":false,"name":"6排8号"},{"x":6,"y":8,"type":2,"selected":false},{"x":6,"y":9,"type":2,"selected":false},{"x":6,"y":10,"type":2,"selected":false},{"x":6,"y":11,"type":2,"selected":false},{"x":6,"y":12,"type":1,"selected":false,"name":"6排9号"},{"x":6,"y":13,"type":1,"selected":false,"name":"6排10号"},{"x":6,"y":14,"type":1,"selected":false,"name":"6排11号"},{"x":6,"y":15,"type":1,"selected":false,"name":"6排12号"},{"x":6,"y":16,"type":1,"selected":false,"name":"6排13号"},{"x":6,"y":17,"type":1,"selected":false,"name":"6排14号"},{"x":6,"y":18,"type":1,"selected":false,"name":"6排15号"},{"x":6,"y":19,"type":1,"selected":false,"name":"6排16号"}],[{"x":7,"y":0,"type":2,"selected":false},{"x":7,"y":1,"type":1,"selected":false,"name":"7排1号"},{"x":7,"y":2,"type":1,"selected":false,"name":"7排2号"},{"x":7,"y":3,"type":1,"selected":false,"name":"7排3号"},{"x":7,"y":4,"type":1,"selected":false,"name":"7排4号"},{"x":7,"y":5,"type":1,"selected":false,"name":"7排5号"},{"x":7,"y":6,"type":1,"selected":false,"name":"7排6号"},{"x":7,"y":7,"type":1,"selected":false,"name":"7排7号"},{"x":7,"y":8,"type":1,"selected":false,"name":"7排8号"},{"x":7,"y":9,"type":2,"selected":false},{"x":7,"y":10,"type":2,"selected":false},{"x":7,"y":11,"type":1,"selected":false,"name":"7排9号"},{"x":7,"y":12,"type":1,"selected":false,"name":"7排10号"},{"x":7,"y":13,"type":1,"selected":false,"name":"7排11号"},{"x":7,"y":14,"type":1,"selected":false,"name":"7排12号"},{"x":7,"y":15,"type":1,"selected":false,"name":"7排13号"},{"x":7,"y":16,"type":1,"selected":false,"name":"7排14号"},{"x":7,"y":17,"type":1,"selected":false,"name":"7排15号"},{"x":7,"y":18,"type":1,"selected":false,"name":"7排16号"},{"x":7,"y":19,"type":2,"selected":false}],[{"x":8,"y":0,"type":2,"selected":false},{"x":8,"y":1,"type":2,"selected":false},{"x":8,"y":2,"type":1,"selected":false,"name":"8排1号"},{"x":8,"y":3,"type":1,"selected":false,"name":"8排2号"},{"x":8,"y":4,"type":1,"selected":false,"name":"8排3号"},{"x":8,"y":5,"type":1,"selected":false,"name":"8排4号"},{"x":8,"y":6,"type":1,"selected":false,"name":"8排5号"},{"x":8,"y":7,"type":1,"selected":false,"name":"8排6号"},{"x":8,"y":8,"type":1,"selected":false,"name":"8排7号"},{"x":8,"y":9,"type":2,"selected":false},{"x":8,"y":10,"type":2,"selected":false},{"x":8,"y":11,"type":1,"selected":false,"name":"8排8号"},{"x":8,"y":12,"type":1,"selected":false,"name":"8排9号"},{"x":8,"y":13,"type":1,"selected":false,"name":"8排10号"},{"x":8,"y":14,"type":1,"selected":false,"name":"8排11号"},{"x":8,"y":15,"type":1,"selected":false,"name":"8排12号"},{"x":8,"y":16,"type":1,"selected":false,"name":"8排13号"},{"x":8,"y":17,"type":1,"selected":false,"name":"8排14号"},{"x":8,"y":18,"type":2,"selected":false},{"x":8,"y":19,"type":2,"selected":false}],[{"x":9,"y":0,"type":2,"selected":false},{"x":9,"y":1,"type":1,"selected":false,"name":"9排1号"},{"x":9,"y":2,"type":1,"selected":false,"name":"9排2号"},{"x":9,"y":3,"type":1,"selected":false,"name":"9排3号"},{"x":9,"y":4,"type":1,"selected":false,"name":"9排4号"},{"x":9,"y":5,"type":1,"selected":false,"name":"9排5号"},{"x":9,"y":6,"type":1,"selected":false,"name":"9排6号"},{"x":9,"y":7,"type":1,"selected":false,"name":"9排7号"},{"x":9,"y":8,"type":1,"selected":false,"name":"9排8号"},{"x":9,"y":9,"type":2,"selected":false},{"x":9,"y":10,"type":2,"selected":false},{"x":9,"y":11,"type":1,"selected":false,"name":"9排9号"},{"x":9,"y":12,"type":1,"selected":false,"name":"9排10号"},{"x":9,"y":13,"type":1,"selected":false,"name":"9排11号"},{"x":9,"y":14,"type":1,"selected":false,"name":"9排12号"},{"x":9,"y":15,"type":1,"selected":false,"name":"9排13号"},{"x":9,"y":16,"type":1,"selected":false,"name":"9排14号"},{"x":9,"y":17,"type":1,"selected":false,"name":"9排15号"},{"x":9,"y":18,"type":1,"selected":false,"name":"9排16号"},{"x":9,"y":19,"type":2,"selected":false}],[{"x":10,"y":0,"type":1,"selected":false,"name":"10排1号"},{"x":10,"y":1,"type":1,"selected":false,"name":"10排2号"},{"x":10,"y":2,"type":1,"selected":false,"name":"10排3号"},{"x":10,"y":3,"type":1,"selected":false,"name":"10排4号"},{"x":10,"y":4,"type":1,"selected":false,"name":"10排5号"},{"x":10,"y":5,"type":1,"selected":false,"name":"10排6号"},{"x":10,"y":6,"type":1,"selected":false,"name":"10排7号"},{"x":10,"y":7,"type":1,"selected":false,"name":"10排8号"},{"x":10,"y":8,"type":2,"selected":false},{"x":10,"y":9,"type":2,"selected":false},{"x":10,"y":10,"type":2,"selected":false},{"x":10,"y":11,"type":2,"selected":false},{"x":10,"y":12,"type":1,"selected":false,"name":"10排9号"},{"x":10,"y":13,"type":1,"selected":false,"name":"10排10号"},{"x":10,"y":14,"type":1,"selected":false,"name":"10排11号"},{"x":10,"y":15,"type":1,"selected":false,"name":"10排12号"},{"x":10,"y":16,"type":1,"selected":false,"name":"10排13号"},{"x":10,"y":17,"type":1,"selected":false,"name":"10排14号"},{"x":10,"y":18,"type":1,"selected":false,"name":"10排15号"},{"x":10,"y":19,"type":1,"selected":false,"name":"10排16号"}],[{"x":11,"y":0,"type":2,"selected":false},{"x":11,"y":1,"type":2,"selected":false},{"x":11,"y":2,"type":2,"selected":false},{"x":11,"y":3,"type":2,"selected":false},{"x":11,"y":4,"type":2,"selected":false},{"x":11,"y":5,"type":2,"selected":false},{"x":11,"y":6,"type":2,"selected":false},{"x":11,"y":7,"type":2,"selected":false},{"x":11,"y":8,"type":2,"selected":false},{"x":11,"y":9,"type":2,"selected":false},{"x":11,"y":10,"type":2,"selected":false},{"x":11,"y":11,"type":2,"selected":false},{"x":11,"y":12,"type":2,"selected":false},{"x":11,"y":13,"type":2,"selected":false},{"x":11,"y":14,"type":2,"selected":false},{"x":11,"y":15,"type":2,"selected":false},{"x":11,"y":16,"type":2,"selected":false},{"x":11,"y":17,"type":2,"selected":false},{"x":11,"y":18,"type":2,"selected":false},{"x":11,"y":19,"type":2,"selected":false}],[{"x":12,"y":0,"type":1,"selected":false,"name":"11排1号"},{"x":12,"y":1,"type":1,"selected":false,"name":"11排2号"},{"x":12,"y":2,"type":1,"selected":false,"name":"11排3号"},{"x":12,"y":3,"type":1,"selected":false,"name":"11排4号"},{"x":12,"y":4,"type":1,"selected":false,"name":"11排5号"},{"x":12,"y":5,"type":1,"selected":false,"name":"11排6号"},{"x":12,"y":6,"type":1,"selected":false,"name":"11排7号"},{"x":12,"y":7,"type":1,"selected":false,"name":"11排8号"},{"x":12,"y":8,"type":2,"selected":false},{"x":12,"y":9,"type":2,"selected":false},{"x":12,"y":10,"type":2,"selected":false},{"x":12,"y":11,"type":2,"selected":false},{"x":12,"y":12,"type":1,"selected":false,"name":"11排9号"},{"x":12,"y":13,"type":1,"selected":false,"name":"11排10号"},{"x":12,"y":14,"type":1,"selected":false,"name":"11排11号"},{"x":12,"y":15,"type":1,"selected":false,"name":"11排12号"},{"x":12,"y":16,"type":1,"selected":false,"name":"11排13号"},{"x":12,"y":17,"type":1,"selected":false,"name":"11排14号"},{"x":12,"y":18,"type":1,"selected":false,"name":"11排15号"},{"x":12,"y":19,"type":1,"selected":false,"name":"11排16号"}],[{"x":13,"y":0,"type":2,"selected":false},{"x":13,"y":1,"type":1,"selected":false,"name":"12排1号"},{"x":13,"y":2,"type":1,"selected":false,"name":"12排2号"},{"x":13,"y":3,"type":1,"selected":false,"name":"12排3号"},{"x":13,"y":4,"type":1,"selected":false,"name":"12排4号"},{"x":13,"y":5,"type":1,"selected":false,"name":"12排5号"},{"x":13,"y":6,"type":1,"selected":false,"name":"12排6号"},{"x":13,"y":7,"type":1,"selected":false,"name":"12排7号"},{"x":13,"y":8,"type":1,"selected":false,"name":"12排8号"},{"x":13,"y":9,"type":2,"selected":false},{"x":13,"y":10,"type":2,"selected":false},{"x":13,"y":11,"type":1,"selected":false,"name":"12排9号"},{"x":13,"y":12,"type":1,"selected":false,"name":"12排10号"},{"x":13,"y":13,"type":1,"selected":false,"name":"12排11号"},{"x":13,"y":14,"type":1,"selected":false,"name":"12排12号"},{"x":13,"y":15,"type":1,"selected":false,"name":"12排13号"},{"x":13,"y":16,"type":1,"selected":false,"name":"12排14号"},{"x":13,"y":17,"type":1,"selected":false,"name":"12排15号"},{"x":13,"y":18,"type":1,"selected":false,"name":"12排16号"},{"x":13,"y":19,"type":2,"selected":false}],[{"x":14,"y":0,"type":2,"selected":false},{"x":14,"y":1,"type":2,"selected":false},{"x":14,"y":2,"type":1,"selected":false,"name":"13排1号"},{"x":14,"y":3,"type":1,"selected":false,"name":"13排2号"},{"x":14,"y":4,"type":1,"selected":false,"name":"13排3号"},{"x":14,"y":5,"type":1,"selected":false,"name":"13排4号"},{"x":14,"y":6,"type":1,"selected":false,"name":"13排5号"},{"x":14,"y":7,"type":1,"selected":false,"name":"13排6号"},{"x":14,"y":8,"type":1,"selected":false,"name":"13排7号"},{"x":14,"y":9,"type":2,"selected":false},{"x":14,"y":10,"type":2,"selected":false},{"x":14,"y":11,"type":1,"selected":false,"name":"13排8号"},{"x":14,"y":12,"type":1,"selected":false,"name":"13排9号"},{"x":14,"y":13,"type":1,"selected":false,"name":"13排10号"},{"x":14,"y":14,"type":1,"selected":false,"name":"13排11号"},{"x":14,"y":15,"type":1,"selected":false,"name":"13排12号"},{"x":14,"y":16,"type":1,"selected":false,"name":"13排13号"},{"x":14,"y":17,"type":1,"selected":false,"name":"13排14号"},{"x":14,"y":18,"type":2,"selected":false},{"x":14,"y":19,"type":2,"selected":false}],[{"x":15,"y":0,"type":2,"selected":false},{"x":15,"y":1,"type":2,"selected":false},{"x":15,"y":2,"type":2,"selected":false},{"x":15,"y":3,"type":2,"selected":false},{"x":15,"y":4,"type":1,"selected":false,"name":"14排1号"},{"x":15,"y":5,"type":1,"selected":false,"name":"14排2号"},{"x":15,"y":6,"type":1,"selected":false,"name":"14排3号"},{"x":15,"y":7,"type":1,"selected":false,"name":"14排4号"},{"x":15,"y":8,"type":1,"selected":false,"name":"14排5号"},{"x":15,"y":9,"type":2,"selected":false},{"x":15,"y":10,"type":2,"selected":false},{"x":15,"y":11,"type":1,"selected":false,"name":"14排6号"},{"x":15,"y":12,"type":1,"selected":false,"name":"14排7号"},{"x":15,"y":13,"type":1,"selected":false,"name":"14排8号"},{"x":15,"y":14,"type":1,"selected":false,"name":"14排9号"},{"x":15,"y":15,"type":1,"selected":false,"name":"14排10号"},{"x":15,"y":16,"type":2,"selected":false},{"x":15,"y":17,"type":2,"selected":false},{"x":15,"y":18,"type":2,"selected":false},{"x":15,"y":19,"type":2,"selected":false}]]
const htmlContent = ref('')

function draw(){
  // 计算宽、高
  let w = (data[0].length-1) * 25 + 40
  let h = data.length * 25 + 40 + 180
  // 生成div DOM元素
  let html = `<div style="padding:20px; width:${w}px; height:${h}px; background:#efefef;">`
  html += `<img style="width:100%;" src="${require('@/assets/screen.png')}">`
  data.forEach(row=>{
    html += '<div style="display:flex;">'
    row.forEach(column=>{
      html += `<div data-x="${column.x}" data-y="${column.y}" style="margin:3px; flex-shrink:0;" class="${column.selected?'seat-selected':(column.type==1?'seat-noselect':'seat-disable')}"></div>`
    })
    html += '</div>'
  })
  html+='</div>'
  htmlContent.value = html
}

onMounted(()=>{
  draw() // 绘制面板
})

function chooseSeat(e:any){
  let x = e.target.dataset.x
  let y = e.target.dataset.y
  if(!x || !y)  
    return; 
  data[x][y].selected = true
  draw()
}

</script>

<style>
.selection-result {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #f3f3f3;
  padding: 10px;
}

.selection-result .status {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(0.8);
}
.seat-selection-panel {
  width: 100vw;
  overflow: scroll;
  position: fixed;
  top: 110px;
  bottom: 200px;
}
.seat-selection-panel::-webkit-scrollbar{
  display: none;
}
.seat-noselect {
  background-color: #fff;
  width: 18px;
  height: 18px;
  border: 1px solid #f03d37;
  border-radius: 5px;
  display: inline-block;
}
.seat-selected {
  background-color: #f03d37;
  width: 18px;
  height: 18px;
  border: 1px solid #f03d37;
  border-radius: 5px;
  display: inline-block;
}
.seat-disable {
  width: 18px;
  height: 18px;
  display: inline-block;
  border: 1px solid #fff;
}

.selection-result .status span {
  margin-left: 5px;
  margin-right: 15px;
}

.selection-result .info {
  background-color: #fff;
  margin: 10px 0px;
  border-radius: 10px;
  overflow: hidden;
}
.selection-result .info .content{
  padding: 15px;
}
.selection-result .info .content .desc{
  margin-top: 10px;
  font-size: 0.8em;
  color: #666;
}
</style>