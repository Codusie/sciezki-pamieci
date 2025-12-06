<template>
  <div
    :style="{
      '--marker-size': size,
      '--color-main': colorMain,
      '--color-light': colorLight,
    }"
  >
    <LMap
      ref="mapRef"
      :max-zoom="18"
      :min-zoom="2"
      v-model:zoom="zoom"
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
        <div class="map__attribution">
          &copy;
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="nofollow noopener"
            class="map__attribution-link"
          >
            OpenStreetMap
          </a>
          |
          <a
            href="https://leafletjs.com"
            target="_blank"
            rel="nofollow noopener"
            class="map__attribution-link"
          >
            Leaflet
          </a>
        </div>
      </LControl>

      <slot></slot>
    </LMap>
  </div>
</template>

<script lang="ts" setup>
import { useGuideColor } from '@/composables/useGuideColor'
import { LMap, LTileLayer, LControlZoom, LControl } from '@vue-leaflet/vue-leaflet'
import { computed, useTemplateRef } from 'vue'

const { center = [53.1235, 18.0084], rounded = false } = defineProps<{
  center?: [number, number]
  rounded?: boolean
}>()

const zoom = defineModel<number>('zoom', { default: 12 })

const mapRef = useTemplateRef('mapRef')

const size = computed(() => {
  // Greater zoom -> larger marker size
  if (zoom.value >= 16) return '50px'
  if (zoom.value >= 14) return '35px'
  if (zoom.value >= 12) return '25px'
  if (zoom.value >= 10) return '15px'
  return '10px'
})

const emit = defineEmits(['update:center'])
const centerUpdated = (event: { lat: number; lng: number }) => {
  emit('update:center', event)
}

const colorMain = useGuideColor(600)
const colorLight = useGuideColor(200)
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
    stroke: var(--p-stone-600);
    filter: drop-shadow(2px 0 0 var(--p-stone-200)) drop-shadow(-2px 0 0 var(--p-stone-200))
      drop-shadow(0 2px 0 var(--p-stone-200)) drop-shadow(0 -2px 0 var(--p-stone-200));
  }

  &--rounded {
    border-radius: $border-radius-big;
  }

  &__attribution {
    position: absolute;
    right: 0;
    bottom: 0;
    white-space: nowrap;
    padding: 2px 8px;
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 0.85);
    color: #6b7280;
    font-family: $font-main;
  }

  &__attribution-link {
    color: #525252;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    .dark & {
      color: #d4d4d4;
    }
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
