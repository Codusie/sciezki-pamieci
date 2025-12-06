<template>
  <LMarker :lat-lng="latLng" draggable>
    <LIcon>
      <img class="marker-icon" :src="imageUrl" alt="Map Marker" />
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
  height: 36px !important;
  width: 36px !important;
  background-color: var(--p-yellow-200);
  border: 2px solid var(--p-yellow-600);
  z-index: 10000;
  margin-left: -18px !important;
  margin-top: -18px !important;
  overflow: hidden;
}

.marker-icon {
  width: 32px !important;
  height: 32px;
  border-radius: 50%;
}
</style>
