<template>
  <div class="avatar-guide" :style="{ background: color }">
    <img :src="image" alt="Przewodnik" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useGuideColor } from '@/composables/useGuideColor'
import { useAuthStore } from '@/stores/auth'
import rejewski from '@/assets/images/rejewski.png'
import kazimierzWielki from '@/assets/images/kazimierz_wielki.png'
import twardowski from '@/assets/images/twardowski.png'

const { size = '64px' } = defineProps<{
  size?: string
}>()

const color = useGuideColor(500)

const auth = useAuthStore()

const image = computed(() => {
  const team = auth.guide
  if (!team) return undefined
  switch (team) {
    case 'rejewski':
      return rejewski
    case 'kazimierz_wielki':
      return kazimierzWielki
    case 'twardowski':
      return twardowski
    default:
      return undefined
  }
})
</script>

<style lang="scss" scoped>
.avatar-guide {
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 50%;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.3) inset;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    opacity: 0.9;
  }
}
</style>
