<template>
  <h1>You did it!</h1>
  <p>accessToken: {{ accessToken }}</p>
  {{ isSessionError }}
  <Button>Button</Button>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useAuthStore } from './stores/auth'

const { accessToken, initializeSession, isSessionError } = useAuthStore()

onBeforeMount(() => {
  initializeSession()
})
</script>

<style scoped lang="scss"></style>
