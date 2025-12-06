import createClient, { type Middleware } from 'openapi-fetch'
import type { paths } from './schema'
import { useAuthStore } from './stores/auth'

const API_URL = import.meta.env.VITE_API_URL

const authMiddleware: Middleware = {
  async onRequest({ request }) {
    const { accessToken } = useAuthStore()

    // add Authorization header to every request
    if (accessToken) request.headers.set('Authorization', `Bearer ${accessToken}`)
    return request
  },
}

export const httpService = createClient<paths>({ baseUrl: API_URL })

httpService.use(authMiddleware)
