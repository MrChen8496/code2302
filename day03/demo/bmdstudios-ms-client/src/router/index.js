import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [{
      path: 'index',
      component: () => import('../views/Index.vue'),
      meta: {
        thumbs: ['首页']
      }
    },{
      path: 'actor-list',
      component: () => import('../views/actor/ActorList.vue'),
      meta: {
        thumbs: ['演员管理', '演员列表']
      }
    },{
      path: 'actor-add',
      component: () => import('../views/actor/ActorAdd.vue'),
      meta: {
        thumbs: ['演员管理', '新增演员']
      }
    },{
      path: 'director-list',
      component: () => import('../views/director/DirectorList.vue'),
      meta: {
        thumbs: ['导演管理', '导演列表']
      }
    },{
      path: 'director-add',
      component: () => import('../views/director/DirectorAdd.vue'),
      meta: {
        thumbs: ['导演管理', '新增导演']
      }
    },{
      path: 'movie-list',
      component: () => import('../views/movie/MovieList.vue'),
      meta: {
        thumbs: ['电影管理', '电影列表']
      }
    },{
      path: 'movie-add',
      component: () => import('../views/movie/MovieAdd.vue'),
      meta: {
        thumbs: ['电影管理', '新增电影']
      }
    },{
      path: 'movie-update',
      component: () => import('../views/movie/MovieUpdate.vue'),
      meta: {
        thumbs: [
          '电影管理', 
          {name:'电影列表', to:'/home/movie-list'}, 
          '修改电影信息']
      }
    }]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
