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
    },{
      path: 'cinema-list',
      component: () => import('../views/cinema/CinemaList.vue'),
      meta: {
        thumbs: ['电影院管理', '电影院列表']
      }
    },{
      path: 'cinema-add',
      component: () => import('../views/cinema/CinemaAdd.vue'),
      meta: {
        thumbs: ['电影院管理', '新增电影院']
      }
    },{
      path: 'cinema-room-list/:id',
      component: () => import('../views/cinema/CinemaRoomList.vue'),
      meta: {
        thumbs: ['电影院管理', '电影院列表', '放映厅列表']
      }
    },{
      path: 'showingon-plan-add',
      component: () => import('../views/cinema/ShowingonPlanAdd.vue'),
      meta: {
        thumbs: ['电影院管理', '电影院列表', '放映厅列表', '新增排片计划']
      }
    },{
      path: 'showingon-plan-list',
      component: () => import('../views/cinema/ShowingonPlanList.vue'),
      meta: {
        thumbs: ['电影院管理', '电影院列表', '放映厅列表', '排片计划列表']
      }
    },{
      path: 'seat-template',
      component: () => import('../views/cinema/CinemaRoomSeatTemplate.vue'),
      meta: {
        thumbs: ['电影院管理', '电影院列表', '放映厅列表', '配置座位模板']
      }
    }]
  },
  {
    path: '/user/login',
    name: 'login',
    component: () => import('../views/user/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
