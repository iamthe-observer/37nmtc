import Home from '@/views/Home/Layout.vue'
import About_Us from '@/views/About/Layout.vue'
import Academics from '@/views/Academics/Layout.vue'
import Admission from '@/views/Admission/Layout.vue'
import Students from '@/views/Students/Layout.vue'
import News from '@/views/News/Layout.vue'
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
  {
    path: '/admission',
    name: 'admission',
    component: Admission,
  },
  {
    path: '/students',
    name: 'students',
    component: Students,
  },
  {
    path: '/news',
    name: 'news',
    component: News,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
