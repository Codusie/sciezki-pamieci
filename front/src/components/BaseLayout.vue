<template>
  <div>
    <slot />

    <Nav v-if="nav" />
  </div>
</template>

<script lang="ts" setup>
import Nav from '@/components/Nav.vue'

type Props = {
  nav?: boolean
};

withDefaults(defineProps<Props>(), {
  nav: true,
})
</script>