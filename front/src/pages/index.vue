<template>
  <Layout>
    <div class="map-view">
      <Map class="map-view__map">
        <MapMarker
          v-for="mark in data"
          :key="mark.id"
          :lat-lng="[Number(mark.latitude), Number(mark.longitude)]"
          :image-url="mark.thumbnail_url"
        />
      </Map>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { httpService } from '@/api'
import Layout from '@/components/Layout.vue'
import Map from '@/components/Map.vue'
import MapMarker from '@/components/MapMarker.vue'
import { useQuery } from '@tanstack/vue-query'

const { data } = useQuery({
  queryKey: ['get-landmarks'],
  queryFn: async () => {
    const { data } = await httpService.GET('/landmarks')
    return data
  },
})
</script>

<style lang="scss" scoped>
.map-view {
  width: 100%;
  height: calc(100% - 46px);

  &__map {
    width: 100%;
    height: 100%;
  }
}
</style>
