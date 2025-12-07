import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMutation } from '@tanstack/vue-query'
import { httpService } from '@/api'
import type { Team } from '@/schema'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const guide = ref<Team>()
    const accessToken = ref<string | null>(null)
    const isSessionError = ref(false)

    const { mutateAsync: createNewSession, isPending: isInitializingSession } = useMutation({
      mutationFn: async (team: Team) => {
        const { data } = await httpService.POST('/users', { body: { team } })
        return data?.access_token
      },
      onSuccess: (newToken, newGuide) => {
        console.log('🚀 ~ newToken:', newToken)
        accessToken.value = newToken ?? null
        guide.value = newGuide
      },
      onError: (error) => {
        isSessionError.value = true
        console.error('Failed to create a new session', error)
      },
    })

    return { guide, accessToken, createNewSession, isInitializingSession, isSessionError }
  },
  { persist: true },
)
