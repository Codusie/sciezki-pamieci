<template>
  <div class="avatar-guide" :style="{ background: color }">
    <img src="@/assets/images/rejewski.png" alt="Przewodnik" />
  </div>
</template>

<script setup lang="ts">
import { useGuideColor } from '@/composables/useGuideColor'

const color = useGuideColor(500)
</script>

<style lang="scss" scoped>
.avatar-guide {
  position: fixed;
  left: 24px;
  top: 24px;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  z-index: 9900;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.3) inset;
  padding-top: 8px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>
