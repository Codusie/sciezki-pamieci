<template>
  <Layout>
    <BaseLoading :loading="isLoading">
      <div class="landmark-view">
        <div class="landmark-header">
          <div class="landmark-title">
            <h1>{{ data?.name || 'Loading landmark...' }}</h1>
          </div>

          <div v-if="data?.localization_name" class="landmark-location">
            <i class="pi pi-map-marker"></i>
            <span>{{ data.localization_name }}</span>
          </div>
        </div>

        <div class="landmark-content">
          <Chat
            v-if="data && chat"
            :messages="chat.messages.value"
            :is-typing="chat.isTyping.value"
            :is-connected="chat.isConnected.value"
          />
          <div v-else class="chat-placeholder">
            <Card>
              <template #content>
                <div class="placeholder-content">
                  <i class="pi pi-comments"></i>
                  <p>Loading chat interface...</p>
                </div>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </BaseLoading>

    <!-- Fixed Chat Input -->
    <ChatInput
      v-if="data && chat"
      v-model="newMessage"
      :is-typing="chat.isTyping.value"
      @send="handleSendMessage"
    />
  </Layout>
</template>

<script setup lang="ts">
import BaseLoading from '@/components/BaseLoading.vue'
import Layout from '@/components/Layout.vue'
import Chat from '@/components/Chat.vue'
import ChatInput from '@/components/ChatInput.vue'
import Card from 'primevue/card'
import { useLandmark } from '@/composables/useLandmark'
import { useChat } from '@/composables/useChat'
import { useAuthStore } from '@/stores/auth'
import { computed, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'
import type { components } from '@/schema'
import type { Team } from '@/schema'

type Landmark = components['schemas']['Landmark']

const route = useRoute()
const authStore = useAuthStore()
const landmarkId = computed(() => Number(route.params.landmarkId))
const { data, isLoading } = useLandmark(landmarkId)
const newMessage = ref('')

const getInitialPicture = (landmark?: Landmark) => {
  return landmark?.thumbnail_url
}

// Mock function to generate initial message based on landmark data
const getInitialMessage = (landmark?: Landmark) => {
  return `Welcome to ${landmark?.name}! I'm your digital guide and I'm here to help you discover the fascinating stories and secrets of this remarkable place.`
}

// Generate guide name based on selected team
const getGuideName = (team?: Team) => {
  const guideNames: Record<Team, string> = {
    rejewski: 'Marian Rejewski',
    kazimierz_wielki: 'Król Kazimierz Wielki',
    twardowski: 'Pan Twardowski',
  }
  return team ? guideNames[team] : 'Virtual Guide'
}

const guideName = computed(() => getGuideName(authStore.guide))

// Chat functionality
const chat = useChat(
  landmarkId.value,
  getInitialMessage(data.value),
  guideName.value,
  getInitialPicture(data.value),
)

const handleSendMessage = () => {
  if (chat && newMessage.value.trim()) {
    chat.sendMessage(newMessage.value)
    newMessage.value = ''
    chat.scrollToBottom()
  }
}

onBeforeMount(() => {
  chat.connect()
})
</script>

<style lang="scss" scoped>
.landmark-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 140px; // Space for fixed input
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: calc(100vh - 80px); // Full height minus navbar
  overflow: hidden;
}

.landmark-header {
  background: var(--p-surface-0);
  padding: 2rem;
  border-radius: var(--p-border-radius-lg);
  border: 1px solid var(--p-surface-border);
  box-shadow: var(--p-shadow-1);

  .landmark-title {
    margin-bottom: 1rem;

    h1 {
      margin: 0 0 0.5rem 0;
      color: #1a1a1a; /* Forced dark color for contrast */
      font-size: 2.5rem;
      font-weight: 700;
      line-height: 1.2;
    }
  }

  .landmark-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--p-text-muted-color);
    font-size: 0.95rem;
    margin-top: 1rem;

    i {
      color: var(--p-primary-color);
      font-size: 1.1rem;
    }
  }
}

.landmark-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-placeholder {
  height: 600px;

  .p-card {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed var(--p-surface-300);
    background: var(--p-surface-50);
    box-shadow: none;

    .placeholder-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      color: var(--p-text-muted-color);

      i {
        font-size: 3rem;
        opacity: 0.5;
      }

      p {
        margin: 0;
        font-size: 1.1rem;
      }
    }
  }
}

// Ensure body and html don't scroll when chat is active
:global(body) {
  &:has(.chat-input-fixed) {
    overflow: hidden;
  }
}

// Responsive design
@media (max-width: 768px) {
  .landmark-view {
    padding: 1rem;
    padding-bottom: 120px; // Adjust for mobile input
    gap: 1rem;
  }

  .landmark-header {
    padding: 1.5rem;

    .landmark-title h1 {
      font-size: 2rem;
    }
  }
}

@media (max-width: 480px) {
  .landmark-view {
    padding-bottom: 110px;
  }

  .landmark-header {
    padding: 1rem;

    .landmark-title h1 {
      font-size: 1.75rem;
    }

    .landmark-description {
      font-size: 1rem;
    }
  }
}
</style>
