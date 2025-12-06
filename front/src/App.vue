<template>
  <RouterView />

  <div class="global-loading" :class="{ 'global-loading--active': store.isInitializingSession }">
    <img src="@/assets/images/logo-bydgoszcz.jpg" alt="Logo Miasto Bydgoszcz" height="150" />
    <BaseLoading loading />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useAuthStore } from './stores/auth'
import BaseLoading from './components/BaseLoading.vue'
import { useRouter } from 'vue-router'

const store = useAuthStore()
const router = useRouter()

onBeforeMount(() => {
  if (!store.accessToken) router.push({ name: 'choose-your-guide' })
})
</script>

<style lang="scss">
.global-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  gap: 2rem;
  transition: opacity 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;

  &--active {
    visibility: visible;
    opacity: 1;
  }
}
</style>
