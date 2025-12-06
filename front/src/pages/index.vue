<template>
  <Layout>
    <div class="map-view">
      <Map class="map-view__map" />
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import Map from '@/components/Map.vue'
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
