<template>
  <h1>You did it!</h1>
  <p>accessToken: {{ store.accessToken }}</p>
  <Button>Button</Button>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
</script>
