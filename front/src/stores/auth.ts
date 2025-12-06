import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMutation } from '@tanstack/vue-query'
import { httpService } from '@/api'
import type { Team } from '@/schema'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const accessToken = ref<string | null>(null)
    const isSessionError = ref(false)

    const { mutate: createNewSession, isPending: isInitializingSession } = useMutation({
      mutationFn: async (team: Team) => {
        const { data } = await httpService.POST('/users', { body: { team } })
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

    return {
      accessToken,
      createNewSession,
      isInitializingSession,
      isSessionError,
    }
  },
  { persist: true },
)
