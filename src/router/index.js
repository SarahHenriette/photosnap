import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stories',
    name: 'Stories',
    component: () => import(/* webpackChunkName: "stories" */ '../views/Stories.vue')
  },
  {
    path: '/features',
    name: 'Features',
    component: () => import(/* webpackChunkName: "features" */ '../views/Features.vue')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import(/* webpackChunkName: "pricing" */ '../views/Pricing.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
