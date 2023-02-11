// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    meta: 'main-layout',
    component: () => import('@/pages/Home/P-Home.vue'),
  },
  {
    path: '/login',
    meta: 'main-layout',
    component: () => import('@/pages/Login/P-Login.vue'),
  },
  {
    path: '/register',
    meta: 'main-layout',
    component: () => import('@/pages/Register/P-Register.vue'),
  },
  {
    path: '/checkout',
    meta: 'main-layout',
    component: () => import('@/pages/Checkout/P-Checkout.vue'),
  },
  {
    path: '/my_products',
    meta: 'main-layout',
    component: () => import('@/pages/MyProducts/P-MyProducts.vue'),
  },
  {
    path: '/new_product',
    meta: 'main-layout',
    component: () => import('@/pages/NewProduct/P-NewProduct.vue'),
  },
] 

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
