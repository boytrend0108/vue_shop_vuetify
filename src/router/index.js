// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    meta: 'main-layout',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/login',
    meta: 'main-layout',
    component: () => import('@/pages/LoginPage.vue'),
  },
  {
    path: '/register',
    meta: 'main-layout',
    component: () => import('@/pages/RegisterPage.vue'),
  },
  {
    path: '/checkout',
    meta: 'main-layout',
    component: () => import('@/pages/CheckoutPage.vue'),
  },
  {
    path: '/my_products',
    meta: 'main-layout',
    component: () => import('@/pages/MyProductsPage.vue'),
  },
  {
    path: '/new_product',
    meta: 'main-layout',
    component: () => import('@/pages/NewProductPage.vue'),
  },
] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
