<template>
    <div class="person">
      <img src="https://p0.pipi.cn/basicdata/25bfd6d753706dd7c3cf3e4348f18898a9954.jpg?imageView2/1/w/128/h/170" alt="">
      <span>亮亮</span>
    </div>
</template>

<script>
  export default { }
</script>

<style lang="scss" scoped>
.person {
  width: 80px;
  height: 130px;
  display: inline-block;
  margin: 0px 10px 10px 0px;
  text-align: center;

  img {
    width: 80px;
  }
  span {
    font-size: 0.9em;
    display: block;
    overflow: hidden; 
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>