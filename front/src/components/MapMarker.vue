<template>
  <LMarker :lat-lng="latLng" @click="onClick">
    <LIcon>
      <img v-if="imageUrl" class="marker-image" :src="imageUrl" :alt="`TODO`" />
      <i :class="PrimeIcons.MAP_MARKER" class="marker-icon" />
    </LIcon>
  </LMarker>
</template>

<script setup lang="ts">
import { PrimeIcons } from '@primevue/core/api'
import { LMarker, LIcon } from '@vue-leaflet/vue-leaflet'

import { useRouter } from 'vue-router'

const { id, latLng, imageUrl } = defineProps<{
  id: number
  latLng: [number, number]
  imageUrl?: string
}>()

const router = useRouter()

const onClick = () => {
  router.push({ name: 'landmark-view', params: { landmarkId: id } })
}
</script>

<style lang="scss">
.leaflet-marker-icon {
  border-radius: 50%;
  height: calc(var(--marker-size) + 4px) !important;
  width: calc(var(--marker-size) + 4px) !important;
  background-color: var(--color-light);
  border: 2px solid var(--color-main);
  z-index: 10000;
  margin-left: calc(var(--marker-size) / -2) !important;
  margin-top: calc(var(--marker-size) / -2) !important;
  overflow: hidden;
  transition: 0.3s;
}

.marker-image {
  width: var(--marker-size) !important;
  height: var(--marker-size);
  border-radius: 50%;
  transition: 0.3s;
}

.marker-icon {
  width: var(--marker-size) !important;
  height: var(--marker-size);
  font-size: calc(var(--marker-size) * 0.6) !important;
  color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
