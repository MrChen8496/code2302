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



### 移动端web应用的缓存设计方案

当应用需要数据时，就应该发请求，找服务端获取。但是有一些数据：它们的数据量不小，全局基本没有什么变化，访问量还挺频繁，这些数据如果每次都发请求去服务端获取，将造成服务端不小的压力。这时就可以考虑以下使用**缓存方案**来优化程序。 

**客户端缓存的业务流程：**

1. 客户端发送请求，获取这一组数据，拿到数据后，记得把数据向缓存中存一份。
2. 但下次发送请求时，先去缓存中找一找，以前存过没有；存过的话就直接拿来用。如果没有存过再发请求。
























