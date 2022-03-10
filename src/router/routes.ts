import type { RouteRecordRaw } from 'vue-router'
import PageLayout from '@/layout/page-layout.vue'
import appRoutes from './modules'
import login from './modules/login'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'login'
  },
  login,
  {
    path: '/',
    name: 'root',
    component: PageLayout,
    children: appRoutes
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found/index.vue')
  }
]
