/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import AdminLayoutView from '../layouts/AdminLayoutView.vue'
import AuthLayoutView from '../layouts/AuthLayoutView.vue'
import GuestLayoutView from '../layouts/GuestLayoutView.vue'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import SignInView from '../views/SignInView.vue'
import UmkmView from '../views/UmkmView.vue'
import Dashboard from '../views/admin/Dashboard.vue'
import AdminUmkm from '../views/admin/AdminUmkm.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guest-layout',
      component: GuestLayoutView,
      meta: { requiresAuth: false },
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          meta: { requiresAuth: false },
          component: HomeView
        },
        {
          path: '/umkm',
          name: 'umkm',
          meta: { requiresAuth: false },
          component: UmkmView
        },
        {
          path: '/product',
          name: 'product',
          meta: { requiresAuth: false },
          component: ProductView
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth-layout',
      redirect: '/auth',
      meta: { requiresAuth: false },
      component: AuthLayoutView,
      children: [
        {
          path: '/auth/signin',
          name: 'signin',
          meta: { requiresAuth: false },
          component: SignInView
        }
      ]
    },
    {
      path: '/admin',
      name: 'admin-layout',
      redirect: '/admin',
      component: AdminLayoutView,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/admin/dashboard',
          name: 'dashboard',
          meta: { requiresAuth: true },
          component: Dashboard
        },
        {
          path: '/admin/umkm',
          name: 'admin-umkm',
          meta: { requiresAuth: true },
          component: AdminUmkm
        }
      ]
    }
  ]
})

router.beforeEach((to, from) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  // console.log('router ', store.state.rootModule)
  // if (to.meta.requiresAuth && !auth.isLoggedIn()) {
  const token = sessionStorage.getItem('accessToken')
  if (to.meta.requiresAuth && !token) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      name: 'signin',
      // save the location we were at to come back later
      query: { redirect: to.fullPath }
    }
  }
})
export default router
