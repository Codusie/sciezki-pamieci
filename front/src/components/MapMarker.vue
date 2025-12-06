<template>
  <LMarker :lat-lng="latLng">
    <LIcon>
      <img class="marker-icon" :src="imageUrl" :alt="`TODO`" />
    </LIcon>
  </LMarker>
</template>

<script setup lang="ts">
import { LMarker, LIcon } from '@vue-leaflet/vue-leaflet'

const { latLng, imageUrl } = defineProps<{
  latLng: [number, number]
  imageUrl: string
}>()
</script>

<style lang="scss">
.leaflet-marker-icon {
  border-radius: 50%;
  height: calc(var(--marker-size) + 4px) !important;
  width: calc(var(--marker-size) + 4px) !important;
  background-color: var(--p-yellow-200);
  border: 2px solid var(--p-yellow-600);
  z-index: 10000;
  margin-left: calc(var(--marker-size) / -2) !important;
  margin-top: calc(var(--marker-size) / -2) !important;
  overflow: hidden;
  transition: 0.3s;
}

.marker-icon {
  width: var(--marker-size) !important;
  height: var(--marker-size);
  border-radius: 50%;
  transition: 0.3s;
}
</style>
