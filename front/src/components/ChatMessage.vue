<template>
  <div class="message-wrapper" :class="{ 'message-user': isUser, 'message-guide': isGuide }">
    <div class="message-container">
      <!-- Avatar -->
      <div class="message-avatar">
        <GuideAvatar v-if="isGuide" :size="'40px'" />
      </div>

      <!-- Content -->
      <div class="message-bubble">
        <!-- Author Name (Optional, good for context) -->
        <div class="message-meta" v-if="isGuide">
          <span class="author-name">{{ authorName || 'Przewodnik' }}</span>
          ·
          <span class="message-time" v-if="timestamp">{{ formattedTime }}</span>
        </div>
        <div class="message-meta" v-else>
          <span class="message-time" v-if="timestamp">{{ formattedTime }}</span>
        </div>

        <!-- Image -->
        <div v-if="image" class="message-image-container">
           <Image
            :src="image"
            alt="Obraz od przewodnika"
            preview
            class="message-image"
          />
        </div>

        <!-- Text -->
        <div v-else-if="message" class="message-text" :style="userMessageStyle" v-html="formattedMessage"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Image from 'primevue/image'
import GuideAvatar from './GuideAvatar.vue'
import { useAuthStore } from '@/stores/auth'
import { useGuideColor } from '@/composables/useGuideColor'

interface Props {
  author: 'user' | 'guide'
  authorName?: string
  message: string
  image?: string
  timestamp?: Date
}

const props = defineProps<Props>()

const authStore = useAuthStore()
const teamColor = useGuideColor(500)

const isUser = computed(() => props.author === 'user')
const isGuide = computed(() => props.author === 'guide')

const userMessageStyle = computed(() => {
  if (isUser.value) {
    const isYellow = authStore.guide === 'kazimierz_wielki'
    return {
      backgroundColor: teamColor.value,
      color: isYellow ? 'var(--p-surface-900)' : 'white'
    }
  }
  return {}
})


const formattedTime = computed(() => {
  return props.timestamp?.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
})

const formattedMessage = computed(() => {
  return props.message
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
})
</script>

<style lang="scss" scoped>
.message-wrapper {
  margin-bottom: 1.5rem;
  width: 100%;
  display: flex;
  animation: message-slide-in 0.3s ease-out;

  &.message-user {
    justify-content: flex-end;

    .message-container {
      flex-direction: row-reverse;
    }

    .message-bubble {
      align-items: flex-end;

      .message-text {
        background: var(--p-primary-200);
        color: var(--p-text-color);
        border-radius: 12px 0 12px 12px;
      }
      
      .message-meta {
        justify-content: flex-end;
      }
    }
  }

  &.message-guide {
    justify-content: flex-start;

    .message-bubble {
      align-items: flex-start;

      .message-text {
        background: var(--p-surface-200);
        border-radius: 0 12px 12px 12px;
      }
    }
  }
}

.message-container {
  display: flex;
  gap: 1rem;
  max-width: 80%;
  
  @media (max-width: 768px) {
    max-width: 95%;
  }
}

.message-avatar {
  flex-shrink: 0;
  display: flex;
  align-items: flex-start;

  .user-avatar {
    background: var(--p-primary-200);
    color: var(--p-text-color);
    font-weight: 500;
  }
}

.message-bubble {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0; // Fix for flex child overflow
}

.message-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--p-text-muted-color);
}

.author-name {
  color: var(--p-stone-700);
  font-weight: 500;
}

.message-text {
  padding: 1rem;
  
  :deep(strong) {
    font-weight: 600;
  }
  
  :deep(em) {
    font-style: italic;
  }
}

.message-image-container {
  border-radius: 0 12px 12px 12px;
  overflow: hidden;
  max-width: 300px;
  
  :deep(img) {
    display: block;
    height: 100%;
    width: 100%;
  }
}

@keyframes message-slide-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
