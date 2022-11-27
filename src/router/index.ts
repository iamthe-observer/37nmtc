import Home from '@/views/Home/Layout.vue'
import About_Us from '@/views/About_Us.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about_us',
    name: 'About Us',
    component: About_Us,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
