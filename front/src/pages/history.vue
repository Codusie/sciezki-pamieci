<template>
  <Layout>
    <BaseLoading :is-loading="isLoading">
      <div class="history-container">
        <div class="header">
          <h1 class="title">Twoja historia</h1>
          <p class="subtitle">Kolekcja miejsc i momentów</p>
        </div>

        <Timeline :value="data?.data" align="right" class="custom-timeline">
          <template #marker>
            <div class="custom-marker">
              <i class="pi pi-map-marker" style="font-size: 1rem"></i>
            </div>
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
          <p>Nie odwiedziłeś jeszcze żadnych miejsc. Zacznij swoją podróż!</p>
        </div>
      </div>
    </BaseLoading>
  </Layout>
</template>

<script setup lang="ts">
import { httpService } from '@/api'
import Layout from '@/components/Layout.vue'
import BaseLoading from '@/components/BaseLoading.vue'
import { useQuery } from '@tanstack/vue-query'
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
  font-family: 'Roboto', sans-serif;
  color: #44403c; // stone-700
}

.header {
  text-align: center;
  margin-bottom: 5rem;
  animation: fadeDown 1s ease-out;

  .title {
    font-size: 3.5rem;
    font-weight: 300;
    letter-spacing: -1px;
    margin: 0;
    background: linear-gradient(135deg, #57534e 0%, #a8a29e 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.2rem;
    color: #78716c; // stone-500
    margin-top: 1rem;
    font-weight: 300;
  }
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
    background-color: #e7e5e4; // stone-200
    width: 2px;
  }
}

.custom-marker {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #d6d3d1; // stone-300
  display: flex;
  align-items: center;
  justify-content: center;
  color: #78716c; // stone-500
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  z-index: 1;
  transition: all 0.3s ease;
}

.timeline-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01);
  cursor: pointer;
  margin-bottom: 2rem;
  margin-right: 1rem;
  border: 1px solid #f5f5f4; // stone-100
  
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
    font-weight: 600;
    color: #292524; // stone-800
    line-height: 1.3;
  }

  .visit-time {
    margin-top: 0.5rem;
    font-size: 0.9rem;
    color: #a8a29e; // stone-400
  }
}

.empty-state {
  text-align: center;
  color: #a8a29e;
  margin-top: 4rem;
  
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
}

@keyframes fadeDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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
