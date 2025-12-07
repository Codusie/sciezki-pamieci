<template>
  <ChooseGuide @select="onTeamSelect" :loading="store.isInitializingSession" />

  <IntroModal v-model:visible="isModalVisible" :guide="selectedTeam" @confirm="onTeamConfirm" />
</template>

<script setup lang="ts">
import ChooseGuide from '@/components/ChooseGuide.vue'
import type { Team } from '@/schema'
import IntroModal from '@/components/IntroModal.vue'

import { useAuthStore } from '@/stores/auth'
import { nextTick, onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'

const store = useAuthStore()
const router = useRouter()

const selectedTeam = ref<Team>()
const isModalVisible = ref(false)

const onTeamSelect = async (team: Team) => {
  selectedTeam.value = team
  isModalVisible.value = true
}

const onTeamConfirm = async () => {
  if (!selectedTeam.value) return

  await store.createNewSession(selectedTeam.value)
  await nextTick()

  const prevRoute = router.currentRoute.value.query.prev as string | undefined

  if (prevRoute) router.push(prevRoute)
  else router.push({ name: 'index' })
}

onBeforeMount(() => {
  if (store.accessToken) router.push({ name: 'index' })
})
</script>
