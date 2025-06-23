import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '@/pages/auth/LoginPage.vue'
import LogupPage from '@/pages/auth/LogupPage.vue'


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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
