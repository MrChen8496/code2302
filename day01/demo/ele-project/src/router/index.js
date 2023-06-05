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
    path: '/nav',
    component: () => import('../views/Nav.vue')
  },
  {
    path: '/container',
    component: () => import('../views/Container.vue')
  },
  {
    path: '/component',
    component: () => import('../views/Component.vue'),
    
    // redirect重定向:
    // 如果直接访问/component则自动跳转到/component/container
    redirect: '/component/container', 

    children: [{
      path: 'container',
      component: () => import('../views/Container.vue')
    },{
      path: 'table',
      component: () => import('../views/Table.vue')
    },{
      path: 'form',
      component: () => import('../views/Form.vue')
    },]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
