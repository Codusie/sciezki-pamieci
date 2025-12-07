<template>
  <header class="header">
    <Button v-if="back" @click="$router.go(-1)">
      <i class="pi pi-arrow-left"></i>
    </Button>
    <div v-if="icon" class="header__icon">
      <i :class="icon"></i>
    </div>
    <div>
      <div class="header__title">{{ title }}</div>
      <div v-if="subtitle" class="header__subtitle">
        {{ subtitle }}
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from './Button.vue'

interface Props {
  title: string
  icon?: string
  subtitle?: string
  back?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  back: false,
})

const emit = defineEmits<{ back: [] }>()
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  padding-top: 1rem;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: 5rem;
  padding: calc(env(safe-area-inset-top)) 0.75rem 0.5rem 0.75rem;
  backdrop-filter: blur(12px);

  &__title {
    font-weight: 500;
    font-size: 1.125rem;
    color: var(--p-stone-800);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__subtitle {
    font-size: 0.875rem;
    color: var(--p-stone-500);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__icon {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--p-stone-800);
    color: var(--p-stone-100);
  }
}
</style>
