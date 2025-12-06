<template>
  <div class="chat-message-wrapper" :class="{ 'user-message': isUser, 'guide-message': isGuide }">
    <Transition name="message-fade" appear>
      <div class="chat-message">
        <!-- Avatar -->
        <div class="message-avatar">
          <GuideAvatar v-if="isGuide" :size="'48px'" />
          <Avatar
            v-else
            :label="avatarLabel"
            :icon="avatarIcon"
            :image="avatarImage"
            shape="circle"
            size="normal"
            :class="avatarClass"
          />
        </div>

        <!-- Message Content -->
        <div class="message-content">
          <!-- Author and timestamp -->
          <div class="message-header">
            <span class="message-author">{{ authorName || (isUser ? 'Ty' : 'Przewodnik') }}</span>
            <small class="message-time">{{ formattedTime }}</small>
          </div>

          <!-- Loading state -->
          <div v-if="isLoading" class="message-loading">
            <div class="loading-dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <span class="loading-text">Ładowanie...</span>
          </div>

          <!-- Image message -->
          <div v-else-if="image && !isLoading" class="message-image">
            <Image
              :src="image"
              :alt="`Image from ${author}`"
              preview
              class="landmark-image"
              :class="{ 'image-loading': imageLoading }"
              @load="imageLoading = false"
              @error="imageError = true"
            />
            <div v-if="imageError" class="image-error">
              <i class="pi pi-exclamation-triangle"></i>
              <span>Failed to load image</span>
            </div>
          </div>

          <!-- Text message -->
          <div v-else-if="message" class="message-text">
            <Card class="message-card" :class="messageCardClass">
              <template #content>
                <div class="message-body" v-html="formattedMessage"></div>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Card from 'primevue/card'
import Image from 'primevue/image'
import GuideAvatar from './GuideAvatar.vue'

interface Props {
  author: 'user' | 'guide'
  authorName?: string
  message: string
  image?: string
  timestamp?: Date
  isLoading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  timestamp: () => new Date(),
  isLoading: false,
})

const imageLoading = ref(true)
const imageError = ref(false)

const isUser = computed(() => props.author === 'user')
const isGuide = computed(() => props.author === 'guide')

const avatarLabel = computed(() => {
  if (props.author === 'user') return 'U'
  if (props.author === 'guide') {
    return props.authorName ? props.authorName.charAt(0).toUpperCase() : 'G'
  }
  return 'G'
})

const avatarIcon = computed(() => {
  if (props.author === 'user') return 'pi pi-user'
  if (props.author === 'guide') return 'pi pi-compass'
  return 'pi pi-compass'
})

const avatarImage = computed(() => {
  // You can add custom avatar images here
  return undefined
})

const avatarClass = computed(() => ({
  'user-avatar': isUser.value,
  'guide-avatar': isGuide.value,
}))

const messageCardClass = computed(() => ({
  'user-card': isUser.value,
  'guide-card': isGuide.value,
}))

const formattedTime = computed(() => {
  return props.timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })
})

const formattedMessage = computed(() => {
  // Simple markdown-like formatting
  return props.message
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>')
})
</script>

<style lang="scss" scoped>
.chat-message-wrapper {
  margin-bottom: 1rem;
  animation: slideUp 0.3s ease-out;

  &.user-message {
    display: flex;
    justify-content: flex-end;

    .chat-message {
      flex-direction: row-reverse;

      .message-content {
        margin-right: 0.75rem;
        margin-left: 0;
      }
    }
  }

  &.guide-message {
    display: flex;
    justify-content: flex-start;
  }
}

.chat-message {
  display: flex;
  align-items: flex-start;
  max-width: 85%;
  gap: 0.75rem;
}

.message-avatar {
  flex-shrink: 0;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .user-avatar {
    background: linear-gradient(135deg, var(--p-primary-500), var(--p-primary-700));
    color: white;
  }

  .guide-avatar {
    background: linear-gradient(135deg, var(--p-green-500), var(--p-green-700));
    color: white;
  }
}

.message-content {
  flex: 1;
  min-width: 0;
  margin-left: 0.75rem;
}

.message-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;

  .message-author {
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--p-stone-600);
  }

  .message-time {
    color: var(--p-stone-400);
    font-size: 0.75rem;
  }
}

.message-loading {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: var(--p-surface-50);
  border-radius: var(--p-border-radius);
  border: 1px solid var(--p-surface-200);

  .loading-dots {
    display: flex;
    gap: 0.25rem;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--p-primary-500);
      animation: loadingPulse 1.4s infinite ease-in-out;

      &:nth-child(1) {
        animation-delay: -0.32s;
      }
      &:nth-child(2) {
        animation-delay: -0.16s;
      }
      &:nth-child(3) {
        animation-delay: 0s;
      }
    }
  }

  .loading-text {
    color: var(--p-stone-400);
    font-size: 0.875rem;
  }
}

.message-image {
  max-width: 300px;
  border-radius: var(--p-border-radius);
  overflow: hidden;
  box-shadow: var(--p-shadow-2);

  .landmark-image {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1.24;
    display: block;
    transition: opacity 0.3s ease;
    border-radius: 16px;
    overflow: hidden;

    :deep(img) {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &.image-loading {
      opacity: 0.6;
    }
  }

  .image-error {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 2rem;
    background: var(--p-surface-100);
    color: var(--p-text-muted-color);

    i {
      font-size: 1.5rem;
      color: var(--p-red-500);
    }
  }
}

.message-text {
  .message-card {
    box-shadow: var(--p-shadow-1);
    transition: all 0.2s ease;

    /* Removed hover for mobile optimization */
    /* &:hover {
      box-shadow: var(--p-shadow-2);
    } */

    &.user-card {
      background: linear-gradient(135deg, var(--p-primary-500), var(--p-primary-600));
      border: none;

      :deep(.p-card-content) {
        .message-body {
          color: white;
          font-weight: 500;
        }
      }
    }

    &.guide-card {
      background: var(--p-surface-0);
      border: 1px solid var(--p-surface-200);
      border-left: 4px solid var(--p-green-500);

      :deep(.p-card-content) {
        .message-body {
          color: var(--p-stone-600);
          line-height: 1.5;
        }
      }
    }
  }
}

// Animations
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes loadingPulse {
  0%,
  80%,
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

// Message transitions
.message-fade-enter-active {
  transition: all 0.4s ease-out;
}

.message-fade-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.message-fade-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}

// Responsive design
@media (max-width: 768px) {
  .chat-message {
    max-width: 95%;
  }

  .message-content {
    margin-left: 0.5rem;
  }

  .message-image {
    max-width: 250px;
  }
}
</style>
