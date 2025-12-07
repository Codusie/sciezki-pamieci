import { useAuthStore } from '@/stores/auth'
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
      name: 'teams',
      component: () => import('@/pages/teams.vue'),
      path: '/teams',
    },
    {
      name: 'choose-your-guide',
      component: () => import('@/pages/choose-your-guide.vue'),
      path: '/choose-your-guide',
    },
  ],
})

router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  if (!store.accessToken && to.name !== 'choose-your-guide')
    return next({ name: 'choose-your-guide', query: { prev: to.fullPath } })
  next()
})

export default router
