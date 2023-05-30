<template>
  <div>
    <h2>亮哥的购物车</h2>
    <div>
      <div 
        class="item" 
        :key="item.id"
        v-for="item,i in cartInfo" >
        <div class="pic">
          <img :src="item.url" alt="">
        </div>
        <div class="title">
          {{item.name}}
        </div>
        <div class="category">
          {{item.cat}}
        </div>
        <div class="price">
          ¥{{item.price}}
        </div>
        <div class="count">
          <button 
            :disabled="item.count==1" 
            @click="item.count--">-</button>
          &nbsp;
          <span>{{item.count}}</span>
          &nbsp;
          <button @click="item.count++">+</button> 
        </div>
        <div class="item-total">
          ¥{{item.price*item.count}}
        </div>
        <div class="operation">
          <b @click="cartInfo.splice(i, 1)">删除</b>
        </div>
      </div>
      <div class="item" style="align-items: center;">
        <div style="width:200px;">
          删除选中的购物项
        </div>
        <div @click="cartInfo=[]" style="width:200px;">
          清空购物车
        </div>
        <div class="title"></div>
        <div style="width:300px; font-size:1.5em;">
          总计: ¥ 
          {{ getTotal() }}
            ¥ 
          {{totalPrice}}
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        cartInfo: [
          {id:1001, name:'臭豆腐', cat:'零食', price:'15.5', count:3, url:"https://img1.baidu.com/it/u=3177312548,1875042102&fm=253&fmt=auto&app=120&f=JPEG?w=550&h=350"},
          {id:1002, name:'榴莲', cat:'水果', price:'115.5', count:51, url:"https://img0.baidu.com/it/u=880115772,2516992756&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"},
          {id:1003, name:'鲱鱼罐头', cat:'零食', price:'45.5', count:13, url:"https://img1.baidu.com/it/u=42471663,3037536517&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"},
          {id:1004, name:'油炸毛鸡蛋', cat:'零食', price:'5.5', count:2, url:"https://img0.baidu.com/it/u=691751293,2040679302&fm=253&fmt=auto&app=120&f=JPEG?w=640&h=360"},
        ]
      }
    },
    methods: {
      /** 获取购物车总价格，将每一件商品单价*数量，再累加即可 
       *  1 1 2 3 5 8 13 21 34 55 89 。。。
       */
      getTotal() {
        let total = 0
        this.cartInfo.forEach(item=>{
          total += item.count * item.price
        })
        return total
      }
    },
    // computed选项用于定义计算属性，计算属性的本质实际上是函数
    computed: {
      // 定义一个计算属性(函数)，函数名就是计算属性名
      totalPrice() {
        let total = 0
        this.cartInfo.forEach(item=>{
          total += item.count * item.price
        })
        return total
      }
    },
  }
</script>

<style lang="scss" scoped>
.item {
  padding: 20px 25px;
  background-color: antiquewhite;
  border: 1px solid black;
  display: flex;
  font-size: 0.9em;
  margin: 10px auto;
  width: 80%;
  text-align: left;

  .pic {
    width: 60px;
    height: 60px;
    border: 1px solid #777;
    background: #fff;
    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
  }

  .title {
    margin: 0px 20px;
    flex: 1;
  }
  .category {
    width: 120px;
  }
  .price{
    font-weight: bold;
    width: 120px;
  }
  .item-total{
    font-weight: bold;
    width: 120px;
  }
  .count {
    width: 130px;
  }
  .operation {
    width: 120px;
    cursor: pointer;
    user-select: none;
  }
  .operation:hover {
    color: #f00;
  }
}
</style>