<template>
  <Layout>
    <div class="history">{{ data }}, {{ isLoading }}</div>
  </Layout>
</template>

<script setup lang="ts">
import { httpService } from '@/api'
import Layout from '@/components/Layout.vue'
import { useQuery } from '@tanstack/vue-query'

const { data, isLoading } = useQuery({
  queryKey: ['get-visits'],
  queryFn: async () => {
    const { data } = await httpService.GET('/visits')
    return data
  },
})
</script>

<style lang="scss" scoped>
.history-view {
}
</style>
