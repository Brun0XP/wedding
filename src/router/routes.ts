import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    children: [
      {
        path: '/',
        name: 'Landing',
        component: () => import('@/views/Landing.vue')
      }
    ]
  },
  {
    path: '/auth',
    children: [
      {
        path: '/auth/login',
        name: 'Login',
        component: () => import('@/views/auth/LoginView.vue')
      }
    ]
  },
  {
    path: '/admin',
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/admin',
        name: 'Dashboard',
        component: () => import('@/views/admin/DashboardView.vue')
      }
    ]
  }
];

export default routes;
