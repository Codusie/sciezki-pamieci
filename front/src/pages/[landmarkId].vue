<template>
  <Header :title="landmark?.name || 'Wczytywanie'" :subtitle="landmark?.localization_name" back>
    <GuidesStats
      :kazimierz_wielki_visits_count="landmark?.kazimierz_wielki_visits_count ?? 0"
      :twardowski_visits_count="landmark?.twardowski_visits_count ?? 0"
      :rejewski_visits_count="landmark?.rejewski_visits_count ?? 0"
    />
  </Header>
  <Layout>
    <BaseLoading :loading="isLoading">
      <div class="landmark-view">
        <div class="landmark-content">
          <Chat
            v-if="landmark && chat"
            :messages="chat.messages.value"
            :guide-name="guideName"
            :is-typing="chat.isTyping.value"
            :is-connected="chat.isConnected.value"
          />
          <div v-else class="chat-placeholder">
            <Card>
              <template #content>
                <div class="placeholder-content">
                  <i class="pi pi-comments"></i>
                  <p>Ładowanie interfejsu czatu...</p>
                </div>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </BaseLoading>

    <!-- Fixed Chat Input -->
    <ChatInput
      v-if="landmark && chat"
      v-model="newMessage"
      :is-typing="chat.isTyping.value"
      @send="handleSendMessage"
    />
  </Layout>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import BaseLoading from '@/components/BaseLoading.vue'
import Layout from '@/components/Layout.vue'
import Chat from '@/components/Chat.vue'
import ChatInput from '@/components/ChatInput.vue'
import Card from 'primevue/card'
import { useLandmark } from '@/composables/useLandmark'
import { useChat } from '@/composables/useChat'
import { useAuthStore } from '@/stores/auth'
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { Team } from '@/schema'
import GuidesStats from '@/components/GuidesStats.vue'
import { httpService } from '@/api'

const route = useRoute()
const authStore = useAuthStore()
const landmarkId = computed(() => Number(route.params.landmarkId))
const { data: landmark, isLoading } = useLandmark(landmarkId)
const newMessage = ref('')

const guideName = computed(() => {
  const guideNames: Record<Team, string> = {
    rejewski: 'Marian Rejewski',
    kazimierz_wielki: 'Król Kazimierz Wielki',
    twardowski: 'Pan Twardowski',
  }
  return authStore.guide ? guideNames[authStore.guide] : 'Virtual Guide'
})

// Chat functionality
const chat = useChat(
  // @ts-expect-error TODO
  landmark,
)

const handleSendMessage = () => {
  if (chat && newMessage.value.trim()) {
    chat.sendMessage(newMessage.value)
    newMessage.value = ''
    chat.scrollToBottom()
  }
}

onMounted(() => {
  if (route.query.visited) {
    httpService.POST('/visits', {
      body: {
        landmark_id: landmarkId.value,
      },
    })
  }
})

watch(chat.lastMessageId, () => {
  chat.scrollToBottom()
})

watch(
  () => landmark.value,
  (newLandmark) => {
    if (newLandmark) chat.connect()
  },
  { immediate: true },
)
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
