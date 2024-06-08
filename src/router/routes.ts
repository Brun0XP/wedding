import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/app/AppLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Landing',
        component: () => import('@/views/LandingView.vue')
      },
      {
        path: '/lista-presentes',
        name: 'GiftList',
        component: () => import('@/views/GiftListView.vue')
      }
    ]
  }
];

export default routes;
