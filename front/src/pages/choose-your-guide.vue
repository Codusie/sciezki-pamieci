<template>
  <ChooseGuide @select="onTeamSelect" :loading="store.isInitializingSession" />
</template>

<script setup lang="ts">
import ChooseGuide from '@/components/ChooseGuide.vue'
import type { Team } from '@/schema'

import { useAuthStore } from '@/stores/auth'
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const store = useAuthStore()
const router = useRouter()

const onTeamSelect = async (team: Team) => {
  await store.createNewSession(team)
  router.push({ name: 'index' })
}

onBeforeMount(() => {
  if (store.accessToken) router.push({ name: 'index' })
})
</script>

<style lang="scss" scoped></style>
