import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import SignInView from '../views/SignInView.vue'
import AuthLayoutView from '../layouts/AuthLayoutView.vue'
import GuestLayoutView from '../layouts/GuestLayoutView.vue'
import AdminLayoutView from '../layouts/AdminLayoutView.vue'
import UmkmView from '../views/UmkmView.vue'
import Dashboard from '../views/admin/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guest-layout',
      component: GuestLayoutView,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/umkm',
          name: 'umkm',
          component: UmkmView
        },
        {
          path: '/product',
          name: 'product',
          component: ProductView
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth-layout',
      redirect: '/auth',
      component: AuthLayoutView,
      children: [
        {
          path: '/auth/signin',
          name: 'signin',
          component: SignInView
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin-layout',
      redirect: '/admin',
      component: AdminLayoutView,
      children: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          component: Dashboard
        }
      ]
    }
  ]
})

export default router
