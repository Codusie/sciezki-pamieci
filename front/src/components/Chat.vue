<template>
  <div class="chat-container">
    <!-- Connection Status -->
    <Transition name="status-fade">
      <div v-if="!isConnected" class="connection-status">
        <Card class="status-card">
          <template #content>
            <div class="status-content">
              <ProgressSpinner size="2rem" stroke-width="3" />
              <span>Connecting to guide...</span>
            </div>
          </template>
        </Card>
      </div>
    </Transition>

    <!-- Chat Messages Area -->
    <Transition name="chat-fade">
      <div v-if="isConnected" class="chat-wrapper">
        <ScrollPanel class="chat-messages" :pt="{ wrapper: 'chat-scroll-wrapper' }">
          <div class="messages-container">
            <TransitionGroup name="message-list" tag="div">
              <ChatMessage
                v-for="message in messages"
                :key="message.id"
                :author="message.author"
                :message="message.message"
                :image="message.image"
                :timestamp="message.timestamp"
                :is-loading="message.isLoading"
              />
            </TransitionGroup>

            <!-- Typing Indicator -->
            <Transition name="typing-fade">
              <div v-if="isTyping" class="typing-indicator">
                <div class="typing-avatar">
                  <Avatar icon="pi pi-android" shape="circle" size="normal" class="bot-avatar" />
                </div>
                <Card class="typing-card">
                  <template #content>
                    <div class="typing-animation">
                      <div class="typing-dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                      </div>
                      <span class="typing-text">Guide is typing...</span>
                    </div>
                  </template>
                </Card>
              </div>
            </Transition>
          </div>
        </ScrollPanel>

        <!-- Chat Input -->
        <div class="chat-input-area">
          <Card class="input-card">
            <template #content>
              <div class="input-container">
                <InputGroup>
                  <Textarea
                    v-model="newMessage"
                    placeholder="Ask about this landmark..."
                    :rows="1"
                    :auto-resize="true"
                    :max-rows="4"
                    class="chat-input"
                    @keydown.enter.prevent="handleSendMessage"
                    @keydown.shift.enter.prevent="addNewLine"
                    :disabled="isTyping"
                    aria-label="Type your message about the landmark"
                  />
                  <Button
                    :icon="isTyping ? 'pi pi-spin pi-spinner' : 'pi pi-send'"
                    severity="primary"
                    class="send-button"
                    :disabled="!canSendMessage"
                    @click="handleSendMessage"
                    :loading="isTyping"
                  />
                </InputGroup>

                <div class="input-hints">
                  <small class="hint-text">
                    Press Enter to send • Ask about history, architecture, or interesting facts
                  </small>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, watch, nextTick } from 'vue'
import ChatMessage from './ChatMessage.vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import InputGroup from 'primevue/inputgroup'
import Avatar from 'primevue/avatar'
import ProgressSpinner from 'primevue/progressspinner'
import ScrollPanel from 'primevue/scrollpanel'
import { useChat } from '@/composables/useChat'

interface Props {
  landmarkId: number
  initialMessage: string
  initialPicture: string
}

const props = defineProps<Props>()

const {
  messages,
  isTyping,
  newMessage,
  isConnected,
  connect,
  sendMessage,
  scrollToBottom,
  lastMessageId,
} = useChat(props.landmarkId, props.initialMessage, props.initialPicture)

const canSendMessage = computed(
  () => newMessage.value.trim().length > 0 && !isTyping.value && isConnected.value,
)

const handleSendMessage = () => {
  if (canSendMessage.value) {
    sendMessage()
    scrollToBottom()
  }
}

const addNewLine = () => {
  newMessage.value += '\n'
}

// Auto-scroll when new messages arrive
watch(lastMessageId, () => {
  nextTick(() => {
    scrollToBottom()
  })
})

// Connect when component mounts
onMounted(() => {
  connect()
})
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--p-surface-ground);
  border-radius: var(--p-border-radius-lg);
  border: 1px solid var(--p-surface-border);
  overflow: hidden;
  box-shadow: var(--p-shadow-3);
}

.connection-status {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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
  height: 100%;
}

.chat-messages {
  flex: 1;
  height: 0; // Important for scroll to work properly

  :deep(.chat-scroll-wrapper) {
    height: 100%;
  }

  :deep(.p-scrollpanel-content) {
    padding-right: 1rem;
  }
}

.messages-container {
  padding: 1rem;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.typing-indicator {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  animation: slideUp 0.3s ease-out;

  .typing-avatar .bot-avatar {
    background: linear-gradient(135deg, var(--p-surface-200), var(--p-surface-300));
    color: var(--p-text-color);
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

  .input-card {
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: transparent;

    :deep(.p-card-content) {
      padding: 1rem;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .chat-input {
        flex: 1;
        border-radius: var(--p-border-radius) 0 0 var(--p-border-radius);
        font-size: 0.95rem;

        &:focus {
          border-color: var(--p-primary-color);
          box-shadow: 0 0 0 1px var(--p-primary-color);
        }
      }

      .send-button {
        border-radius: 0 var(--p-border-radius) var(--p-border-radius) 0;
        min-width: 3rem;
        transition: all 0.2s ease;

        &:enabled:hover {
          background: var(--p-primary-600);
          transform: translateY(-1px);
        }

        &:disabled {
          opacity: 0.6;
        }
      }

      .input-hints {
        .hint-text {
          color: var(--p-text-muted-color);
          font-size: 0.75rem;
          line-height: 1.3;
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

@keyframes typingPulse {
  0%,
  80%,
  100% {
    transform: scale(0.6);
    opacity: 0.4;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
}

// Transitions
.status-fade-enter-active,
.status-fade-leave-active {
  transition: all 0.5s ease;
}

.status-fade-enter-from,
.status-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.chat-fade-enter-active {
  transition: all 0.6s ease;
}

.chat-fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.typing-fade-enter-active,
.typing-fade-leave-active {
  transition: all 0.3s ease;
}

.typing-fade-enter-from,
.typing-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.message-list-move,
.message-list-enter-active,
.message-list-leave-active {
  transition: all 0.3s ease;
}

.message-list-enter-from,
.message-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.message-list-leave-active {
  position: absolute;
}

// Responsive design
@media (max-width: 768px) {
  .chat-container {
    border-radius: var(--p-border-radius);
  }

  .messages-container {
    padding: 0.75rem;
  }

  .chat-input-area .input-card :deep(.p-card-content) {
    padding: 0.75rem;
  }

  .input-container {
    .input-hints .hint-text {
      font-size: 0.7rem;
    }
  }
}
</style>
