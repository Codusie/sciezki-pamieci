<template>
  <div class="icon" :class="{ 'icon--soft': soft }">
    <i :class="icon"></i>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  icon: string
  soft?: boolean
}

withDefaults(defineProps<Props>(), {
  soft: false,
})
</script>

<style lang="scss" scoped>
.icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--p-stone-800);
  color: var(--p-stone-100);

  &--soft {
    background: var(--p-stone-200);
    color: var(--p-stone-700);
  }
}
</style>
