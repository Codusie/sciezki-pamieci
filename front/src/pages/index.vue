<template>
  <Layout>
    <div class="map-view">
      <Map
        class="map-view__map"
        v-bind="locatedAt ? { center: [coords.latitude, coords.longitude] } : undefined"
      >
        <LCircleMarker v-if="coords" :lat-lng="[coords.latitude, coords.longitude]" :radius="10" />

        <MapMarker
          v-for="mark in data"
          :key="mark.id"
          :id="mark.id"
          :lat-lng="[Number(mark.latitude), Number(mark.longitude)]"
          :image-url="mark.thumbnail_url"
        />
      </Map>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import Map from '@/components/Map.vue'
import MapMarker from '@/components/MapMarker.vue'
import { useGeolocation } from '@vueuse/core'
import { LCircleMarker } from '@vue-leaflet/vue-leaflet'
import { useLandmarks } from '@/composables/useLandmarks'

const { data } = useLandmarks()

const { coords, locatedAt } = useGeolocation({
  enableHighAccuracy: true,
  immediate: true,
})
</script>

<style lang="scss" scoped>
.map-view {
  width: 100%;
  height: 100%;

  &__map {
    width: 100%;
    height: 100%;
  }
}
</style>
