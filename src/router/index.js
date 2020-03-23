import Vue from 'vue'
import VueRouter from 'vue-router'
import Message from '../views/Message.vue'
import MyCar from '../views/MyCar.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MyCar',
    component: MyCar
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/forsale',
    name: 'ForSale',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ForSale.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/mycar',
    name: 'MyCar',
    component: MyCar,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
