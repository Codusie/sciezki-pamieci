<template>
  <div v-tooltip.bottom="tooltipText" class="guides-stats">
    <div
      class="guides-stats__item"
      :class="`guides-stats__item--${item.color}`"
      v-for="item in items"
      :key="item.label"
    >
      {{ item.percentage.toFixed(0) }}%
    </div>
  </div>
</template>

<script setup lang="ts">
import { GUIDE_TO_COLOR_MAP } from '@/composables/useGuideColor'
import { computed } from 'vue'

const props = defineProps<{
  rejewski_visits_count: number
  kazimierz_wielki_visits_count: number
  twardowski_visits_count: number
}>()

const totalVisits = computed(
  () =>
    props.rejewski_visits_count +
    props.kazimierz_wielki_visits_count +
    props.twardowski_visits_count,
)

const calcPercentage = (count: number) => {
  if (totalVisits.value === 0) return 0
  return Math.round((count / totalVisits.value) * 100)
}

const tooltipText = `Liczba wizyt z przewodnikiem:
- Marian Rejewski: ${props.rejewski_visits_count}
- Król Kazimierz Wielki: ${props.kazimierz_wielki_visits_count}
- Pan Twardowski: ${props.twardowski_visits_count}
`

const items = computed(() =>
  [
    {
      label: 'Marian Rejewski',
      visits: props.rejewski_visits_count,
      color: GUIDE_TO_COLOR_MAP.rejewski,
      percentage: calcPercentage(props.rejewski_visits_count),
    },
    {
      label: 'Król Kazimierz Wielki',
      visits: props.kazimierz_wielki_visits_count,
      color: GUIDE_TO_COLOR_MAP.kazimierz_wielki,
      percentage: calcPercentage(props.kazimierz_wielki_visits_count),
    },
    {
      label: 'Pan Twardowski',
      visits: props.twardowski_visits_count,
      color: GUIDE_TO_COLOR_MAP.twardowski,
      percentage: calcPercentage(props.twardowski_visits_count),
    },
  ].sort((a, b) => b.visits - a.visits),
)
</script>

<style lang="scss" scoped>
.guides-stats {
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  margin-left: auto;
  margin-top: 4px;
  width: 25%;

  &__item {
    flex: 1;
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 4px;
    background-color: var(--p-stone-400);

    &--red {
      background-color: var(--p-red-500);
      color: white;
    }

    &--blue {
      background-color: var(--p-blue-500);
      color: white;
    }

    &--yellow {
      background-color: var(--p-yellow-500);
      color: white;
    }
  }
}
</style>
