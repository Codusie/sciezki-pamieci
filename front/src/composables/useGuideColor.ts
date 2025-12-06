import type { Team } from '@/schema'
import { useAuthStore } from '@/stores/auth'
import { useCssVar } from '@vueuse/core'

export const GUIDE_TO_COLOR_MAP: Record<Team, string> = {
  rejewski: 'red',
  kazimierz_wielki: 'yellow',
  twardowski: 'blue',
}

export const useGuideColor = (weight: number) => {
  const store = useAuthStore()

  return useCssVar(
    () => `--p-${store.guide ? GUIDE_TO_COLOR_MAP[store.guide] : 'stone'}-${weight}` as const,
  )
}
