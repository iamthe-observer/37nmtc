import Home from '@/views/Home/Layout.vue'
import About_Us from '@/views/About/Layout.vue'
import Academics from '@/views/Academics/Layout.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about us',
    component: About_Us,
  },
  {
    path: '/academics',
    name: 'academics',
    component: Academics,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
