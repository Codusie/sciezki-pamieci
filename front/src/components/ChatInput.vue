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
  bottom: 80px; // Above navbar height
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--p-surface-0);
  border-top: 1px solid var(--p-surface-border);
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);

  .input-card {
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: transparent;
    margin: 0 auto;
    max-width: 1200px;

    :deep(.p-card-content) {
      padding: 1rem 2rem;
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

// Responsive design
@media (max-width: 768px) {
  .chat-input-fixed {
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
