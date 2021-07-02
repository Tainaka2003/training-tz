import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/list',
    name: 'ListView',
    component: ListView
  },
  {
    path: '/card',
    name: 'CardView',
    component: () => import(/* webpackChunkName: "about" */ '../views/CardView.vue')
  },
  {
    path: '/',
    name: 'KckTableView',
    component: () => import(/* webpackChunkName: "about" */ '../views/KckTableView.vue')
  },
  {
    path: '/add',
    name: 'AddView',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddView.vue')
  },
  {
    path: '/edit/:userId',
    name: 'EditView', props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/EditView.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
