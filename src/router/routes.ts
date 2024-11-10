import { RouteRecordRaw } from 'vue-router'

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
        path: '/rsvp',
        name: 'RSVP',
        component: () => import('@/views/app/RsvpView.vue')
      },
      {
        path: '/lista-presentes',
        name: 'GiftList',
        component: () => import('@/views/app/GiftListView.vue')
      },
      {
        path: '/carrinho',
        name: 'Carrinho',
        component: () => import('@/views/app/CartView.vue')
      }
    ]
  }
]

export default routes
