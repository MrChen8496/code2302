<template>
    <!-- 主要区域开始 -->
    <div class="main-container">
      <!-- 单一影片开始 -->
      <div class="movie-item">
        <!-- 图片开始 -->
        <div class="movie-item-avatar">
          <img :src="movie.cover"> 
        </div>
        <!-- 图片结束 -->
        <!-- 内容容器开始 -->
        <div class="movie-item-content-wrapper">
            <div class="content">
                <div class="title">{{ movie.title }}</div>
                <div class="line-ellipsis">{{ movie.type }}</div>
                <div class="line-ellipsis">{{ movie.star_actor }}</div>
            </div>
            <!-- 评分开始 -->
            <div class="score-wrapper">
              <div class="score">{{ movie.score }}</div>
              <!-- <div>暂无评分</div> -->
            </div>
            <!-- 评分结束 -->
        </div>
        <!-- 内容容器结束 -->
      </div>
      <!-- 单一影片结束 -->   
    </div>
    <!-- 主要区域结束 -->
</template>

<script setup lang="ts">
  import Movie from '@/types/Movie'

  // 定义自定义属性 movie，接收父组件传来的参数
  // 通过泛型，定义自定义属性及数据类型
  const props = defineProps<{
    movie: Movie
  }>()
  // console.log('接收到参数movie:', props.movie)

</script>

<style scoped>
/* 主要区域 */
.main-container{
  background-color: #fff;
}
/* 影片信息 */
.movie-item{
  margin:0 10px;
  background-color: #fff;
  border-bottom:1px solid #e5e5e5;
}
/* 影片图片容器 */
.movie-item .movie-item-avatar{
  width: 64px;
  height: 90px;
  position: relative;
  margin-top: 12px;
  float: left;
}
.movie-item .movie-item-avatar img{
  width: 100%;
  height: 90px;
  border-radius: 2px;
}
/* 影片内容容器 */
.movie-item .movie-item-content-wrapper{
  padding: 12px 14px 12px 0;
  margin-left: 80px;
  height: 90px;
  max-height: 90px;
  position: relative;
}
.movie-item .movie-item-content-wrapper .content{
  padding-right: 5px;
  margin-right: 58px;
  overflow: hidden;
}
.movie-item .movie-item-content-wrapper .content .title{
  max-height: 26px;
  margin-bottom: 7px;
  line-height: 26px;
  font-size: 17px;
  color: #333;
  overflow: hidden;
}
.movie-item .movie-item-content-wrapper .content .line-ellipsis{
  margin-top: 15px;
  line-height: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
  color: #666;
}
.movie-item .movie-item-content-wrapper .score-wrapper{
  font-size: 14px;
  position: absolute;
  right: 0;
  top: 13px;
  height: 27px;
  margin: auto;
}
.movie-item .movie-item-content-wrapper .score{
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 14px;
  cursor: pointer;
}

</style>