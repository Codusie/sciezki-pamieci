<template>
  <div class="choose-guide">
    <div class="choose-guide__title">Z kim chcesz poznać Bydgoszcz?</div>

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
          >
            Wybieram!
          </Button>

          <img :src="team.img" :alt="team.name" class="single-guide-button__image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GUIDE_TO_COLOR_MAP } from '@/composables/useGuideColor'
import type { Team } from '@/schema'
import rejewski from '@/assets/images/rejewski.png'
import kazimierzWielki from '@/assets/images/kazimierz_wielki.png'
import twardowski from '@/assets/images/twardowski.png'

defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  select: [team: Team]
}>()

const TEAMS = [
  {
    key: 'rejewski',
    name: 'Marian Rejewski',
    color: GUIDE_TO_COLOR_MAP['rejewski'],
    img: rejewski,
  },
  {
    key: 'kazimierz_wielki',
    name: 'Kazimierz Wielki',
    color: GUIDE_TO_COLOR_MAP['kazimierz_wielki'],
    img: kazimierzWielki,
  },
  {
    key: 'twardowski',
    name: 'Pan Twardowski',
    color: GUIDE_TO_COLOR_MAP['twardowski'],
    img: twardowski,
  },
] as const
</script>

<style lang="scss" scoped>
$skewDegree: 5deg;

.choose-guide {
  overflow: hidden;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to left, var(--p-blue-500) 49%, var(--p-red-600) 51%);

  &__title {
    width: 100%;
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
    padding: 2rem 0;
    color: var(--p-slate-50);
    position: absolute;
    z-index: 100;
  }

  &__select {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transform: skew($skewDegree) translateX(-5vw);
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
    position: relative;
    padding-bottom: 40px;

    > * {
      transform: skew(-$skewDegree);
    }
  }

  &--red {
    background-color: var(--p-red-600);
    color: var(--p-red-100);
  }

  &--yellow {
    background-color: var(--p-yellow-500);
    color: var(--p-yellow-100);
  }

  &--blue {
    background-color: var(--p-blue-500);
    color: var(--p-blue-100);
  }

  &__name {
    width: 100dvh;
    font-size: 40px;
    transition: 0.3s;
    font-weight: 600;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(#{90deg});
    position: absolute;
    font-family: 'Oswald', sans-serif;
    z-index: 100;
  }

  &__button {
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;
    z-index: 100;
    width: auto;
    padding: 0 2rem;
    margin-bottom: 40px;
    font-weight: 600;
    background-color: #fff;
  }

  &:focus-within {
    width: 160%;
  }

  &:focus-within &__name {
    font-size: 50px;
  }

  &:focus-within &__button {
    visibility: visible;
    opacity: 1;
  }

  &__image {
    position: absolute;
    bottom: 0;
    left: -40%;
    width: 140%;
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
