<template>
  <div class="about">
    <h1>此页面中测试ref与reactive方法</h1>
    <hr>
    <h3>需求1  ref</h3>
    <h4>商品数量： {{ count }}</h4>
    <button @click="count++">点击，商品数量++</button>
    <button @click="minus">点击，商品数量--</button>

    <h3>需求2  reactive展示一件商品</h3>  
    <h4>商品名称： {{pro.name}}</h4>
    <h4>商品价格： {{pro.price}}</h4>
    <h4>
      购买数量： 
      <button @click="jianjian">-</button>
      {{pro.count}}
      <button @click="jiajia">+</button>
    </h4>
    <button @click="changePro">换一件商品</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, computed, watch } from 'vue';

export default defineComponent({
  setup(){
    const count = ref(10)
    // 直接声明minus方法
    function minus(){
      // ref.value可以访问到代理的目标对象
      count.value-- 
    }

    // 准备一件商品
    const pro = reactive({
      name: '钢管',
      price: 68,
      count: 3
    })
    function jiajia(){
      // pro.value.count++
      pro.count++
    }
    function jianjian(){
      pro.count--
    }
    function changePro(){  // 换一件商品
      pro.name = '榴莲'
      pro.price = 98
      pro.count = 10
      // pro = reactive({
      //   name: '榴莲',
      //   price: 98,
      //   count: 10
      // })
    }

    // 声明一个计算属性total，计算总价格
    let total = computed(function(){
      // 此处进行数据运算
      return pro.price * pro.count
    })

    // 声明一个属性监听器，监听pro.count的变化
    watch(()=>pro.count, (newValue, oldValue)=>{
      console.log('oldValue:', oldValue)
      console.log('newValue:', newValue)
    })

    return { total, count, minus, pro, jiajia, jianjian, changePro }
  }
})
</script>

