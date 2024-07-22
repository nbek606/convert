import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TenderView from '@/views/TenderView.vue'
import TenderDetails from  '@/views/TenderDetails.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tender',
    name: 'tender',
    component: TenderView
  },
  {
    path: '/tender/:id',
    name: 'tender-details',
    component: TenderDetails
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
