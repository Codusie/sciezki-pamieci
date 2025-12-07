<template>
  <Dialog v-model:visible="isVisible" modal header="Poznaj Bydgoszcz!" class="intro-modal">
    <p v-html="guide ? INTRO_TEXT[guide] : ''"></p>

    <p>Pozwólcie, że w skrócie przedstawię zasady gry, którą dla Was przygotowałem:</p>

    <ul>
      <li>
        Wybierając mnie na swojego <b>patrona</b>, dołączyliście także do drużyny, z którą będziecie
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
      <Button type="button" severity="secondary" @click="isVisible = false">
        <i class="pi pi-arrow-left"></i>
      </Button>
      <Button
        type="button"
        @click="emit('confirm')"
        class="intro-modal__start-btn"
        :style="{
          backgroundColor: $props.guide ? `var(--p-${GUIDE_TO_COLOR_MAP[$props.guide]}-500)` : '',
        }"
        >Zaczynajmy!</Button
      >
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import type { Team } from '@/schema'
import { GUIDE_TO_COLOR_MAP } from '@/composables/useGuideColor'
import { INTRO_TEXT } from '@/consts/intro'

defineProps<{
  guide?: Team
}>()

const emit = defineEmits<{
  confirm: []
}>()

const isVisible = defineModel<boolean>('visible')
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
    color: white !important;
    font-weight: 600;
    cursor: pointer;
  }
}
</style>
