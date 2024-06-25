import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/app/AppLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Landing',
        component: () => import('@/views/app/LandingView.vue')
      },
      {
        path: '/lista-presentes',
        name: 'GiftList',
        component: () => import('@/views/app/GiftListView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/admin/AdminLayout.vue'),
    children: [
      {
        path: '/admin/lista-presentes',
        name: 'AdminGiftList',
        component: () => import('@/views/admin/GiftListView.vue')
      }
    ]
  }
];

export default routes;
