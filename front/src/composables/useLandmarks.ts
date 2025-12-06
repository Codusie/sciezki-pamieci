import { httpService } from '@/api'
import { keepPreviousData, useQuery } from '@tanstack/vue-query'

export const useLandmarks = () =>
  useQuery({
    queryKey: ['get-landmarks'],
    queryFn: async () => {
      const { data } = await httpService.GET('/landmarks')
      return data
    },
    placeholderData: keepPreviousData,
  })
