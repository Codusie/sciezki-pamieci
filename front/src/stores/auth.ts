import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMutation } from '@tanstack/vue-query'
import { httpService } from '@/api'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const accessToken = ref<string | null>(null)
    const isSessionError = ref(false)

    const { mutate: createNewSession, isPending: isInitializingSession } = useMutation({
      mutationFn: async () => {
        const { data } = await httpService.POST('/users')
        return data?.access_token
      },
      onSuccess: (newToken) => {
        accessToken.value = newToken ?? null
      },
      onError: (error) => {
        isSessionError.value = true
        console.error('Failed to create a new session', error)
      },
    })

    const initializeSession = () => {
      if (!accessToken.value) createNewSession()
    }

    return {
      accessToken,
      initializeSession,
      isInitializingSession,
      isSessionError,
    }
  },
  { persist: true },
)
