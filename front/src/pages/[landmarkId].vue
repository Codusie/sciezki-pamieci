<template>
  <Layout>
    <BaseLoading :loading="isLoading">
      <div class="landmark-view">
        <h1>{{ data?.name }}</h1>
        <p>{{ data?.description }}</p>
      </div>
    </BaseLoading>
  </Layout>
</template>

<script setup lang="ts">
import BaseLoading from '@/components/BaseLoading.vue'
import Layout from '@/components/Layout.vue'
import { useLandmark } from '@/composables/useLandmark'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const landmarkId = computed(() => Number(route.params.landmarkId))
const { data, isLoading } = useLandmark(landmarkId)
</script>

<style lang="scss" scoped>
.landmark-view {
}
</style>
