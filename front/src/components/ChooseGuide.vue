<template>
  <div class="choose-guide">
    <div class="choose-guide__title">Wybierz swojego przewodnika:</div>

    <div class="choose-guide__select">
      <div
        v-for="team in TEAMS"
        :key="team.name"
        class="single-guide-button"
        tabindex="0"
        :class="`single-guide-button--${team.color}`"
      >
        <div class="single-guide-button__content">
          <div class="single-guide-button__name">{{ team.name }}</div>

          <Button
            class="single-guide-button__button"
            size="large"
            @click="emit('select', team.key as Team)"
            >Dołącz!</Button
          >

          <img
            src="@/assets/images/rejewski.png"
            alt="Rejewski"
            class="single-guide-button__image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GUIDE_TO_COLOR_MAP } from '@/composables/useGuideColor'
import type { Team } from '@/schema'

defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  select: [team: Team]
}>()

const TEAMS = [
  {
    key: 'rejewski',
    name: 'Rejewski',
    color: GUIDE_TO_COLOR_MAP['rejewski'],
  },
  {
    key: 'kazimierz_wielki',
    name: 'Kazimierz Wielki',
    color: GUIDE_TO_COLOR_MAP['kazimierz_wielki'],
  },
  {
    key: 'twardowski',
    name: 'Pan Twardowski',
    color: GUIDE_TO_COLOR_MAP['twardowski'],
  },
] as const
</script>

<style lang="scss" scoped>
$skewDegree: 5deg;

.choose-guide {
  overflow: hidden;
  background: linear-gradient(var(--p-blue-500) 49%, var(--p-red-600) 51%);

  &__title {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
    padding: 2rem 0;
    color: var(--p-slate-50);
    position: absolute;
    top: 30px;
    z-index: 100;
  }

  &__select {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    transform: skew($skewDegree);
  }
}

.single-guide-button {
  width: 100%;
  height: 100%;
  transition: 0.3s;
  text-align: center;
  cursor: pointer;
  color: var(--p-slate-50);
  overflow: hidden;
  font-size: 40px;

  &:first-child {
    overflow: initial;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;
    transform: skew(-$skewDegree);
    position: relative;
    padding-bottom: 40px;
  }

  &--red {
    background-color: var(--p-red-600);
  }

  &--yellow {
    background-color: var(--p-yellow-500);
  }

  &--blue {
    background-color: var(--p-blue-500);
  }

  &__name {
    font-size: 2em;
    font-weight: 600;
    opacity: 0.5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(#{90deg - $skewDegree});
    position: absolute;
    font-family: 'Oswald', sans-serif;
  }

  &__button {
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    z-index: 100;
    background-color: #fff;
  }

  &:focus-within {
    width: 200%;
    font-size: 50px;
  }

  &:focus-within &__button {
    visibility: visible;
    opacity: 1;
  }

  &__image {
    position: absolute;
    bottom: 0;
    left: -20%;
    width: 110%;
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
