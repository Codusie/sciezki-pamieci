<template>
  <div class="chat-input-fixed">
    <Card class="input-card">
      <template #content>
        <div class="input-container">
          <InputGroup>
            <Textarea
              :model-value="modelValue"
              @update:model-value="emit('update:modelValue', $event)"
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
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import InputGroup from 'primevue/inputgroup'

interface Props {
  modelValue: string
  isTyping: boolean
}

interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'send'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const canSendMessage = computed(() => props.modelValue.trim().length > 0 && !props.isTyping)

const handleSendMessage = () => {
  if (canSendMessage.value) {
    emit('send')
  }
}

const addNewLine = () => {
  emit('update:modelValue', props.modelValue + '\n')
}
</script>

<style lang="scss" scoped>
.chat-input-fixed {
  position: fixed;
  bottom: 2.5rem;
  left: 0.5rem;
  right: 0.5rem;
  z-index: 2000;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.05),
    0 0 0 1px rgba(255, 255, 255, 0.3) inset;
  max-width: 500px;
  margin: 0 auto;

  .input-card {
    border: none;
    border-radius: 1rem;
    box-shadow: none;
    background: transparent;

    :deep(.p-card-content) {
      padding: 1rem 1.5rem;
    }

    .input-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .chat-input {
        flex: 1;
        border-radius: 0.75rem 0 0 0.75rem;
        font-size: 0.95rem;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(148, 163, 184, 0.2);
        color: #0f172a;
        padding: 0.75rem 1rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

        &:focus {
          border-color: rgba(59, 130, 246, 0.5);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          background: rgba(255, 255, 255, 1);
        }

        &:disabled {
          background: rgba(248, 250, 252, 0.8);
          color: #94a3b8;
        }

        &::placeholder {
          color: #94a3b8;
          opacity: 0.8;
        }
      }

      .send-button {
        border-radius: 0 0.75rem 0.75rem 0;
        min-width: 3rem;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        background: #3b82f6;
        border-color: #3b82f6;
        box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);

        &:enabled:hover {
          background: #2563eb;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
        }

        &:disabled {
          opacity: 0.5;
          background: #94a3b8;
          border-color: #94a3b8;
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

// Responsive design
@media (max-width: 768px) {
  .chat-input-fixed {
    bottom: 2rem;
    left: 0.75rem;
    right: 0.75rem;
    
    .input-card :deep(.p-card-content) {
      padding: 0.75rem 1rem;
    }

    .input-container {
      .input-hints .hint-text {
        font-size: 0.7rem;
      }
    }
  }
}
</style>
