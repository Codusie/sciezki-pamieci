<template>
  <div class="layout">
    <div class="content" :class="{ 'content--no-padding': isMap }">
      <slot />
    </div>

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
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMap = computed(() => route.path === '/')

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
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8fafc; // slate-50
}

.content {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 100px; // Space for the floating nav
  padding-top: 2rem; // Space from top for non-map pages

  &--no-padding {
    padding-bottom: 0;
    padding-top: 0;
    overflow-y: hidden; // Map handles its own scrolling/panning
  }
}

.mobile-nav {
  position: fixed;
  bottom: 2.5rem;
  left: 0.5rem;
  right: 0.5rem;
  height: 4.5rem;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.3) inset;
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
  color: #94a3b8; // slate-400
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  position: relative;
  width: 80px;

  &:hover {
    color: #64748b; // slate-500
  }

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
    color: #0f172a; // slate-900

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
      background: radial-gradient(circle, rgba(148, 163, 184, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
      border-radius: 50%;
      z-index: 0;
    }
  }
}
</style>
