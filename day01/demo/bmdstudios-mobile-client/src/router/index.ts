import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/index'  // 重定向
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children:[{
      path: 'index',
      component: () => import('../views/index/IndexView.vue'),
      meta: {
        keepAlive: true  // 声明了keepAlive就代表当前组件需要保活  
      }
    },{
      path: 'video',
      component: () => import('../views/video/VideoView.vue'),
    },{
      path: 'show',
      component: () => import('../views/show/ShowView.vue'),
    },{
      path: 'me',
      component: () => import('../views/me/MeView.vue'),
    }]
  },
  {
    path: '/movie-detail/:id',
    name: '/movie-detail',
    component: () => import('../views/index/MovieDetail.vue')
  },
  {
    path: '/cinema-selection',
    name: '/cinema-selection',
    component: () => import('../views/index/CinemaSelection.vue')
  },
  {
    path: '/plan-selection',
    name: '/plan-selection',
    component: () => import('../views/index/PlanSelection.vue')
  },
  {
    path: '/seat-selection',
    name: '/seat-selection',
    component: () => import('../views/index/SeatSelection.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
