import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '@/pages/auth/LoginPage.vue'
import LogupPage from '@/pages/auth/LogupPage.vue'
import ForgetPwdPage from '@/pages/auth/ForgetPwdPage.vue'
import AccueilPage from '@/pages/dashboard/AccueilPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import CollectionsPage from '@/pages/dashboard/CollectionsPage.vue'
import FomulairePage from '@/pages/dashboard/FomulairePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/sign-in',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/sign-up',
    name: 'Logup',
    component: LogupPage
  },
  {
    path: '/forget-pwd',
    name: 'ForgetPwd',
    component: ForgetPwdPage
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: AccueilPage
      },
      {
        path: 'forms',
        name: 'formulaire',
        component: FomulairePage
      },
      {
        path: 'collections',
        name: 'colllections',
        component: CollectionsPage
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
