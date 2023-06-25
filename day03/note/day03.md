# Vue3Project  DAY03

#### 当滚动条滚到底后，自动加载当前类别的下一页数据（触底加载）

```html
<van-list v-if="movies && movies.length>0"
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad">

    <movie-item :movie="item"
                v-for="item in movies" :key="item.id">
    </movie-item>

</van-list>
```














