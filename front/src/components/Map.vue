<template>
  <LMap
    ref="map"
    :max-zoom="17"
    :min-zoom="2"
    :zoom="zoom"
    :center="center"
    :options="{ zoomControl: false }"
    :use-global-leaflet="false"
    :no-blocking-animations="true"
    class="map"
    :class="rounded ? 'map--rounded' : ''"
    @update:center="centerUpdated"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      layer-type="base"
      name="OpenStreetMap"
    />
    <LControlZoom position="topright" />
    <LControl position="bottomright">
      <div
        class="absolute right-0 bottom-0 text-nowrap px-2 py-0.5 rounded-full bg-[var(--ui-bg)] text-gray-500 font-sans"
      >
        &copy;
        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="nofollow noopener"
          class="text-neutral-600 dark:text-neutral-300 hover:underline"
        >
          OpenStreetMap
        </a>
        |
        <a
          href="https://leafletjs.com"
          target="_blank"
          rel="nofollow noopener"
          class="text-neutral-600 dark:text-neutral-300 hover:underline"
        >
          Leaflet
        </a>
      </div>
    </LControl>
    <slot></slot>
  </LMap>
</template>

<script lang="ts" setup>
import { LMap, LTileLayer, LControlZoom, LControl } from '@vue-leaflet/vue-leaflet'

const {
  zoom = 12,
  center = [53.1235, 18.0084],
  rounded = false,
} = defineProps<{
  zoom?: number
  center?: [number, number]
  rounded?: boolean
}>()

const emit = defineEmits(['update:center'])
const centerUpdated = (event: { lat: number; lng: number }) => {
  emit('update:center', event)
}
</script>

<style lang="scss">
$border-radius-big: 12px;
$border-radius: 8px;
$break-point-mobile: 600px;
$color-dark-bg: #121212;
$color-dark: #1e1e1e;
$font-main: 'Inter', sans-serif;

.map {
  &__line {
    stroke: var(--main-color);
    filter: drop-shadow(2px 0 0 var(--main-color-dark)) drop-shadow(-2px 0 0 var(--main-color-dark))
      drop-shadow(0 2px 0 var(--main-color-dark)) drop-shadow(0 -2px 0 var(--main-color-dark));
  }

  &--rounded {
    border-radius: $border-radius-big;
  }
}

.leaflet-container a {
  color: inherit !important;
}

.dark .leaflet-layer {
  filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
}

.dark .leaflet-container {
  background: #000;
}

.leaflet-popup-content-wrapper {
  border-radius: $border-radius;
  box-shadow: none;
}

.leaflet-control-attribution {
  display: none;
}

.leaflet-marker-icon {
  border-radius: 50%;
  height: 16px !important;
  width: 16px !important;
  background-color: var(--main-color);
  border: 2px solid var(--main-color-dark);
  z-index: 10000;
}

.leaflet-control-zoom {
  border: 0 !important;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.25) !important;
  border-radius: $border-radius-big !important;
  margin-top: 20px !important;
  margin-right: 20px !important;

  @media ($break-point-mobile) {
    display: none;
  }
}

.leaflet-control-zoom-in,
.leaflet-control-zoom-out {
  width: 36px !important;
  height: 36px !important;
}

.dark .leaflet-control-zoom-in,
.dark .leaflet-control-zoom-out {
  background: $color-dark-bg;
  color: white;

  &:hover {
    background: $color-dark;
  }
}

.leaflet-control-zoom-in {
  border-bottom: 0 !important;
  border-radius: $border-radius-big $border-radius-big 0 0 !important;
}

.leaflet-control-zoom-out {
  border-radius: 0 0 $border-radius-big $border-radius-big !important;
}

.leaflet-container {
  font-family: $font-main !important;
}

.leaflet-left {
  width: 100%;
  height: 100%;
}
</style>
