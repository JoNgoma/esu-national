import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LoginPage from '@/pages/auth/LoginPage.vue'
import LogupPage from '@/pages/auth/LogupPage.vue'
import ForgetPwdPage from '@/pages/auth/ForgetPwdPage.vue'
import AccueilPage from '@/pages/dashboard/AccueilPage.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import CollectionsPage from '@/pages/dashboard/CollectionsPage.vue'
import FormUnivPage from '@/pages/dashboard/forms/FormUnivPage.vue'
import FormDepFilPage from '@/pages/dashboard/forms/FormDepFilPage.vue'
import FormFacDomPage from '@/pages/dashboard/forms/FormFacDomPage.vue'
import FormSystEdPage from '@/pages/dashboard/forms/FormSystEdPage.vue'

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
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: AccueilPage
      },
      {
        path: 'forms',
        children: [
          {
            path: 'new-univ',
            name: 'new-univ',
            component: FormUnivPage
          },
          {
            path: 'new-education',
            name: 'new-education',
            component: FormSystEdPage
          },
          {
            path: 'new-fac-dom',
            name: 'new-fac-dom',
            component: FormFacDomPage
          },
          {
            path: 'new-dep-fil',
            name: 'new-dep-fil',
            component: FormDepFilPage
          }
        ]
      },
      {
        path: 'collections',
        name: 'colllections',
        component: CollectionsPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 🧱 Vérification du token avant chaque navigation
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token')
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !isAuthenticated) {
    return next({ name: 'Login' }) // ou '/sign-in'
  }

  next()
})

export default router
