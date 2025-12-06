import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'index',
      component: () => import('@/pages/index.vue'),
      path: '/',
    },
    {
      name: 'history',
      component: () => import('@/pages/history.vue'),
      path: '/history',
    },
    {
      name: 'choose-your-team',
      component: () => import('@/pages/choose-your-team.vue'),
      path: '/choose-your-team',
    },
  ],
})

export default router
