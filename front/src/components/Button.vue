<template>
  <div class="button">
    <slot></slot>
  </div>
</template>

<style>
.button {
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: var(--p-surface-200);
  color: var(--p-stone-700);
}
</style>