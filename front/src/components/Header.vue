<template>
  <header class="header">
    <Button v-if="back" @click="onBack">
      <i class="pi pi-arrow-left"></i>
    </Button>
    <Icon v-if="icon" :icon="icon" />
    <div class="header__title">{{ title }}</div>
    <slot></slot>
  </header>
</template>

<script setup lang="ts">
import Button from './Button.vue'
import Icon from './Icon.vue'
import { useRouter } from 'vue-router'

interface Props {
  title: string
  icon?: string
  back?: boolean
}

withDefaults(defineProps<Props>(), {
  back: false,
})

const router = useRouter()

const onBack = () => {
  const hasBack = !!(window.history.state && window.history.state.back) || window.history.length > 1
  if (hasBack) router.back()
  else router.replace('/')
}
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
  background: var(--p-surface-100);

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
}
</style>
