import { createRouter, createWebHistory } from '@ionic/vue-router';
import LoginPagePage from '@/views/LoginPage.vue';
import SignUpPage from '@/views/SignUpPage.vue';
import Dashboard from '@/views/Dashboard.vue';
import ProductosPage from '@/views/ProductosPage.vue';
import UserInfoPage from '@/views/UserInfoPage.vue'
import UserInfoEditPage from '@/views/UserInfoEditPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginPagePage
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUpPage 
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/UserInfo',
    name: 'UserInfo',
    component: UserInfoPage
  },
  {
    path: '/UserInfoEdit',
    name: 'UserInfoEdit',
    component: UserInfoEditPage
  },
  {
    path: '/Productos',
    name: 'Productos',
    component: ProductosPage
  },
  {
    path: '/Productos/:id',
    component: () => import('../views/ProductosDetailsPage.vue')
  },
  {
    path: '/Productos/add',
    component: () => import('../views/AddProductoPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
