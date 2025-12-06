<template>
  <div class="base-loading">
    <i v-if="loading" class="base-loading__icon" :class="PrimeIcons.SPINNER" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { PrimeIcons } from '@primevue/core/api'

defineProps<{
  loading?: boolean
}>()
</script>

<style lang="scss" scoped>
@keyframes spinIcon {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.base-loading {
  position: relative;

  &__icon {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 3rem;
    animation: spinIcon 1s linear infinite;
    color: var(--p-slate-300);
  }
}
</style>
