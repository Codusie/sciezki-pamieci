<template>
  <Layout>
    <div class="map-view">
      <GuideAvatar
        class="map-view__avatar"
        style="z-index: 9900"
        @click="isIntroModalVisible = true"
      />

      <Map class="map-view__map">
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
  <IntroModal
    v-model:visible="isIntroModalVisible"
    :guide="store.guide"
    @confirm="isIntroModalVisible = false"
  />
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import Map from '@/components/Map.vue'
import MapMarker from '@/components/MapMarker.vue'
import GuideAvatar from '@/components/GuideAvatar.vue'
import { useGeolocation } from '@vueuse/core'
import { LCircleMarker } from '@vue-leaflet/vue-leaflet'
import { useLandmarks } from '@/composables/useLandmarks'
import { ref, watch } from 'vue'
import { useMutation } from '@tanstack/vue-query'
import { httpService } from '@/api'
import { getDistanceFromLatLonInMeters } from '@/utils/getDistanceFromLatLonInMeters'

import IntroModal from '@/components/IntroModal.vue'
import { useAuthStore } from '@/stores/auth'

const { data } = useLandmarks()
const store = useAuthStore()
const isIntroModalVisible = ref(false)

const { coords } = useGeolocation({
  enableHighAccuracy: true,
  immediate: true,
})

const { mutate: markAsVisited } = useMutation({
  mutationFn: async (landmarkId: number) => {
    await httpService.POST('/visits', {
      body: {
        landmark_id: landmarkId,
      },
    })
  },
})

watch(
  coords,
  (newCoords) => {
    if (!newCoords) return
    const nearbyLandmark = data.value?.find((landmark) => {
      const distance = getDistanceFromLatLonInMeters(
        newCoords.latitude,
        newCoords.longitude,
        Number(landmark.latitude),
        Number(landmark.longitude),
      )
      return distance <= 50 // 50 meters radius
    })
    if (nearbyLandmark) markAsVisited(nearbyLandmark.id)
  },
  { immediate: true },
)
</script>

<style lang="scss" scoped>
.map-view {
  width: 100%;
  height: 100%;

  &__avatar {
    position: fixed;
    left: 24px;
    top: 24px;
  }

  &__map {
    width: 100%;
    height: 100%;
  }
}
</style>
