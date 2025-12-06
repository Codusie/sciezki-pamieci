import { computed, unref, type MaybeRef } from 'vue'
import { useLandmarks } from './useLandmarks'

export const useLandmark = (id: MaybeRef<number>) => {
  const { data, ...rest } = useLandmarks()
  return {
    data: computed(() => data.value?.find((landmark) => landmark.id === unref(id))),
    ...rest,
  }
}
