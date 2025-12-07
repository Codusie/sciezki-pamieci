<template>
  <div class="chat-container">
    <!-- Connection Status -->
    <Transition name="status-fade">
      <div v-if="!isConnected" class="connection-status">
        <Card class="status-card">
          <template #content>
            <div class="status-content">
              <ProgressSpinner size="2rem" stroke-width="3" />
              <span>Łączenie z przewodnikiem...</span>
            </div>
          </template>
        </Card>
      </div>
    </Transition>

    <!-- Chat Messages Area -->
    <Transition name="chat-fade">
      <div v-if="isConnected" class="chat-wrapper">
        <div class="chat-messages">
          <div class="messages-container">
            <TransitionGroup name="message-list" tag="div">
              <ChatMessage
                v-for="message in props.messages"
                :key="message.id"
                :author="message.author"
                :author-name="guideName"
                :message="message.message"
                :image="message.image"
                :timestamp="message.timestamp"
              />
            </TransitionGroup>

            <!-- Typing Indicator -->
            <Transition name="typing-fade">
              <div v-if="props.isTyping" class="typing-indicator">
                <div class="typing-avatar">
                  <GuideAvatar size="32px" />
                </div>
                <Card class="typing-card">
                  <template #content>
                    <div class="typing-animation">
                      <div class="typing-dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                      </div>
                      <span class="typing-text">Przewodnik pisze...</span>
                    </div>
                  </template>
                </Card>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import ChatMessage from './ChatMessage.vue'
import Card from 'primevue/card'
import ProgressSpinner from 'primevue/progressspinner'
import GuideAvatar from './GuideAvatar.vue'
import type { ChatMessage as ChatMessageType } from '@/types/chat'

const props = defineProps<{
  messages: ChatMessageType[]
  isTyping: boolean
  isConnected: boolean
  guideName?: string
}>()
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  background: var(--p-surface-ground);
  border-radius: var(--p-border-radius-lg);
  border: 1px solid var(--p-surface-border);
  box-shadow: var(--p-shadow-3);
}

.connection-status {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  .status-card {
    border: 1px dashed var(--p-surface-300);
    background: var(--p-surface-50);

    .status-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 2rem;

      span {
        color: var(--p-text-muted-color);
        font-weight: 500;
        text-align: center;
      }
    }
  }
}

.chat-wrapper {
  display: flex;
  flex-direction: column;
}

.chat-messages {
  flex: 1;
}

.messages-container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.typing-indicator {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  animation: slideUp 0.3s ease-out;

  .typing-avatar {
    /* GuideAvatar handles its own styling */
  }

  .typing-card {
    background: var(--p-surface-100);
    border: 1px solid var(--p-surface-200);
    box-shadow: var(--p-shadow-1);

    :deep(.p-card-content) {
      padding: 0.75rem 1rem;
    }

    .typing-animation {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .typing-dots {
        display: flex;
        gap: 0.25rem;

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--p-primary-500);
          animation: typingPulse 1.4s infinite ease-in-out;

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

      .typing-text {
        color: var(--p-text-muted-color);
        font-size: 0.875rem;
        font-style: italic;
      }
    }
  }
}

.chat-input-area {
  border-top: 1px solid var(--p-surface-border);
  background: var(--p-surface-0);
}
</style>
