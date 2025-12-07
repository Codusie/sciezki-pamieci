<template>
  <nav class="mobile-nav">
    <router-link
      v-for="item in items"
      :key="item.route"
      :to="item.route"
      class="nav-item"
      active-class="nav-item--active"
    >
      <div class="icon-container">
        <i :class="item.icon" class="nav-icon" />
      </div>
      <span class="nav-label">{{ item.label }}</span>
    </router-link>
  </nav>
</template>

<script setup lang="ts">
interface NavItem {
  label: string
  route: string
  icon: string
}

const items: NavItem[] = [
  {
    label: 'Mapa',
    route: '/',
    icon: 'pi pi-map',
  },
  {
    label: 'Historia',
    route: '/history',
    icon: 'pi pi-history',
  },
  {
    label: 'Ranking',
    route: '/teams',
    icon: 'pi pi-users',
  },
]
</script>

<style lang="scss" scoped>
.mobile-nav {
  position: fixed;
  bottom: 2.5rem;
  left: 0.5rem;
  right: 0.5rem;
  height: 4.5rem;
  background: white;
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 2000;
  max-width: 500px;
  margin: 0 auto;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--p-text-muted-color);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  position: relative;
  width: 80px;

  /* Removed hover for mobile optimization */
  /* &:hover {
    color: var(--p-text-color);
  } */

  .icon-container {
    position: relative;
    z-index: 1;
    transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .nav-icon {
    font-size: 1.5rem;
  }

  .nav-label {
    font-size: 0.75rem;
    font-weight: 500;
    margin-top: 0.25rem;
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  &--active {
    color: var(--p-primary-color);

    .icon-container {
      transform: translateY(-2px);
    }

    .nav-label {
      font-weight: 600;
      opacity: 1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: radial-gradient(circle, var(--p-primary-500) 0%, rgba(255, 255, 255, 0) 70%);
      opacity: 0.1;
      border-radius: 50%;
      z-index: 0;
    }
  }
}
</style>
