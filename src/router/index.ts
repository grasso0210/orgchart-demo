import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Chart1 from '../views/Chart1.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Chart1',
    component: Chart1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
