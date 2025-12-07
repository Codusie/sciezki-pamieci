<template>
  <ChooseGuide @select="onTeamSelect" :loading="store.isInitializingSession" />

  <Dialog v-model:visible="isModalVisible" modal header="Poznaj Bydgoszcz!" class="intro-modal">
    <p>{{ selectedTeam ? INTRO_TEXT[selectedTeam] : '' }}</p>

    <p>Pozwólcie, że w skrócie przedstawię zasady gry, którą dla Was przygotowałem:</p>

    <ul>
      <li>
        Wybierając mnie na swojego patrona, dołączyliście także do drużyny, z którą będziecie
        wspólnie podbijać Bydgoszcz.
      </li>
      <li>
        Zadaniem Waszej drużyny jest zdobycie jak największej liczby punktów na mapie. Aby to
        zrobić, odwiedzajcie nowe miejsca z włączoną lokalizacją w aplikacji lub skanujcie kody QR
        znajdujące się na oznaczonych punktach.
      </li>
      <li>
        Uwaga! Inne drużyny również mogą odwiedzać te miejsca, a o zdobyciu punktu decyduje to,
        która drużyna odwiedzi dane miejsce ostatnia.
      </li>
      <li>Bawcie się dobrze i wspólnie podbijajcie Bydgoszcz!</li>
    </ul>

    <div class="intro-modal__buttons">
      <Button type="button" severity="secondary" @click="isModalVisible = false">
        <i class="pi pi-arrow-left"></i>
      </Button>
      <Button
        type="button"
        @click="onTeamConfirm"
        class="intro-modal__start-btn"
        :style="{
          backgroundColor: selectedTeam ? `var(--p-${GUIDE_TO_COLOR_MAP[selectedTeam]}-500)` : '',
        }"
        >Zaczynajmy!</Button
      >
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import ChooseGuide from '@/components/ChooseGuide.vue'
import type { Team } from '@/schema'
import { INTRO_TEXT } from '@/consts/intro'

import { useAuthStore } from '@/stores/auth'
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import { GUIDE_TO_COLOR_MAP } from '@/composables/useGuideColor'

const store = useAuthStore()
const router = useRouter()

const selectedTeam = ref<Team | null>(null)
const isModalVisible = ref(false)

const onTeamSelect = async (team: Team) => {
  selectedTeam.value = team
  isModalVisible.value = true
}

const onTeamConfirm = async () => {
  if (!selectedTeam.value) return

  await store.createNewSession(selectedTeam.value)
  router.push({ name: 'index' })
}

onBeforeMount(() => {
  if (store.accessToken) router.push({ name: 'index' })
})
</script>

<style lang="scss">
.intro-modal {
  --p-dialog-color: var(--p-stone-900);
  --p-dialog-background: #fff;

  &__buttons {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 2rem;
  }

  &__start-btn {
    width: auto !important;
    padding-left: 14px;
    padding-right: 14px;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
