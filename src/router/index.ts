import { createRouter, createWebHistory } from 'vue-router';

import routes from '@/router/routes';

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (_to, _from, next) => {
  //   const { isLoggedIn } = useAuth();
  //   if (!(await isLoggedIn()) && to.meta.requiresAuth) {
  //     next({ name: 'Login' });
  //     return;
  //   }
  next();
});

export default router;
