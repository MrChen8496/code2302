import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/movie-detail',
    name: 'movie-detail',
    component: () => import('../views/MovieDetail.vue'),
  },
  {
    path: '/movie-detail/:id',
    name: 'movie-detail-id',
    component: () => import('../views/MovieDetail.vue'),
  },
  {
    path: '/for',
    name: 'for',
    component: () => import('../views/For.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/form',
    name: 'form',
    component: () => import('../views/Form.vue'),
  },
  {
    path: '/direct',
    name: 'direct',
    component: () => import('../views/Direct.vue'),
  },
  {
    path: '/movie-list',
    name: 'movie-list',
    component: () => import('../views/MovieList.vue'),
  },
  {
    path: '/actors',
    name: 'actors',
    component: () => import('../views/Actors.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
