import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'landmark-view',
      component: () => import('@/pages/[landmarkId].vue'),
      path: '/:landmarkId',
    },
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
      name: 'choose-your-guide',
      component: () => import('@/pages/choose-your-guide.vue'),
      path: '/choose-your-guide',
    },
  ],
})

export default router
