<template>
  <Layout>
    <Header 
      title="Twoja historia"
      icon="pi pi-compass"
    />
    <BaseLoading :is-loading="isLoading">
      <div class="history-container">

        <Timeline :value="data?.data" class="custom-timeline">
          <template #marker>
            <Icon icon="pi pi-map-marker" soft />
          </template>
          
          <template #content="slotProps">
            <div class="timeline-card" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
              <div class="image-container" v-if="slotProps.item.landmark.thumbnail_url">
                <img 
                  :src="slotProps.item.landmark.thumbnail_url" 
                  :alt="slotProps.item.landmark.name"
                  loading="lazy"
                />
              </div>
              <div class="card-content">
                <h2>{{ slotProps.item.landmark.name }}</h2>
                <p class="visit-time">Odwiedzono {{ formatFullDate(slotProps.item.created_at) }}</p>
              </div>
            </div>
          </template>
        </Timeline>
        
        <div v-if="!data?.data?.length" class="empty-state">
          <i class="pi pi-compass" style="font-size: 3rem"></i>
          <p>
            Nie odwiedziłeś jeszcze żadnych miejsc.
          </p>
          <p>
            <small>
              Odwieź miejsce z mapy z włączoną lokalizacją lub zeskanuj kod QR przy atrakcji.
            </small>
          </p>
        </div>
      </div>
    </BaseLoading>
  </Layout>
</template>

<script setup lang="ts">
import Icon from '@/components/Icon.vue'
import { httpService } from '@/api'
import Layout from '@/components/Layout.vue'
import BaseLoading from '@/components/BaseLoading.vue'
import { useQuery } from '@tanstack/vue-query'
import Header from '@/components/Header.vue'
import Timeline from 'primevue/timeline'
import { useDateFormat } from '@vueuse/core'
import AnimateOnScroll from 'primevue/animateonscroll';

const vAnimateonscroll = AnimateOnScroll;

const { data, isLoading } = useQuery({
  queryKey: ['get-visits'],
  queryFn: async () => {
    const { data } = await httpService.GET('/visits')
    return data
  },
})

const formatFullDate = (dateString: string) => {
  return useDateFormat(dateString, 'D MMMM YYYY, HH:mm').value
}
</script>

<style lang="scss" scoped>
.history-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;
  min-height: 100vh;
}

.custom-timeline {
  :deep(.p-timeline-event-opposite) {
    display: none;
  }

  :deep(.p-timeline-event-content) {
    flex: 1;
    padding: 0 0 0 3rem;
  }

  :deep(.p-timeline-event-separator) {
    align-items: center;
  }

  :deep(.p-timeline-event-connector) {
    background-color: var(--p-surface-200);
    width: 2px;
  }
}

.custom-marker {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: var(--p-surface-0);
  border: 2px solid var(--p-surface-300);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--p-text-muted-color);
  box-shadow: var(--p-shadow-1);
  z-index: 1;
  transition: all 0.3s ease;
}

.timeline-card {
  background: var(--p-surface-0);
  border-radius: var(--p-border-radius-lg);
  overflow: hidden;
  box-shadow: var(--p-shadow-2);
  cursor: pointer;
  margin-bottom: 2rem;
  margin-right: 1rem;
  border: 1px solid var(--p-surface-200);

  // Animation base state
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, transform 0.3s ease;

  &.fadein {
    opacity: 1;
    transform: translateY(0);
  }

  &.fadeout {
    opacity: 0;
    transform: translateY(30px);
  }
}

.image-container {
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
}

.card-content {
  padding: 1.5rem;

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .visit-time {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: var(--p-text-muted-color);
  }
}

.empty-state {
  text-align: center;
  color: var(--p-text-muted-color);
  margin-top: 4rem;

  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
}

// Responsive adjustments
@media (max-width: 768px) {
  .history-container {
    padding: 2rem 1rem;
  }

  .header .title {
    font-size: 2.5rem;
  }

  .custom-timeline {
    :deep(.p-timeline-event-opposite) {
      display: none;
    }

    :deep(.p-timeline-event-content) {
      padding-left: 1.5rem;
      padding-right: 0;
    }
  }
}
</style>
