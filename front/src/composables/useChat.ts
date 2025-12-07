import { ref, computed, nextTick, type MaybeRef, unref } from 'vue'
import type { ChatMessage } from '@/types/chat'
import { useMutation } from '@tanstack/vue-query'
import { httpService } from '@/api'
import type { components } from '@/schema'

type Landmark = components['schemas']['Landmark']

const createChatMessage = (
  message: string,
  author: 'user' | 'guide',
  createdAt?: Date,
): ChatMessage => ({
  id: `user-${createdAt?.getTime() ?? Date.now()}`,
  author,
  message,
  timestamp: createdAt ?? new Date(),
  type: 'text',
})

export const useChat = (landmark: MaybeRef<Landmark>) => {
  const messages = ref<ChatMessage[]>([])
  const isConnected = ref(false)

  const { mutateAsync: fetchHistory } = useMutation({
    mutationFn: async () => {
      const { data } = await httpService.GET('/chats/{landmark}/history', {
        params: {
          path: {
            landmark: unref(landmark).id,
          },
        },
      })
      return data
    },
  })

  const connect = async () => {
    const { thumbnail_url, description } = unref(landmark)
    if (thumbnail_url)
      messages.value.push({
        id: `initial-image-${Date.now()}`,
        author: 'guide',
        message: '',
        image: thumbnail_url,
        type: 'image',
      })

    const defaultDescription = 'Cześć! Jestem Twoim przewodnikiem! Jak mogę Ci pomóc?'
    messages.value.push({
      id: `initial-text-${Date.now()}`,
      author: 'guide',
      message: defaultDescription ?? description,
      type: 'text',
    })

    try {
      const history = await fetchHistory()
      // @ts-expect-error -- TODO
      const historyMessages: ChatMessage[] = history?.map((message) =>
        createChatMessage(
          message.message,
          message.sender === 'agent' ? 'guide' : 'user',
          new Date(message.timestamp),
        ),
      )
      messages.value.push(...historyMessages)
    } catch (e) {
      console.error('History failed to load:', e)
    }

    isConnected.value = true
  }

  const { mutate: sendMessage, isPending: isTyping } = useMutation({
    onMutate: (messageText: string) => {
      const userMessage = createChatMessage(messageText, 'user')
      messages.value.push(userMessage)
    },
    mutationFn: async (messageText: string) => {
      const { data } = await httpService.POST('/chats/{landmark}/message', {
        body: {
          message: messageText,
        },
        params: {
          path: {
            landmark: unref(landmark).id,
          },
        },
      })
      return data
    },

    onSuccess: (responseText) => {
      // @ts-expect-error -- TODO
      const guideMessage = createChatMessage(responseText?.message as string, 'guide', new Date())
      messages.value.push(guideMessage)
    },
  })

  const scrollToBottom = () => {
    nextTick(() => {
      const chatContainer = document.querySelector('.p-scrollpanel-content')
      if (chatContainer) {
        chatContainer.scrollTo({
          top: chatContainer.scrollHeight,
          behavior: 'smooth',
        })
      }
    })
  }

  // Auto scroll when new messages arrive
  const lastMessageId = computed(() => messages.value[messages.value.length - 1]?.id)

  return {
    messages,
    isTyping,
    isConnected,
    connect,
    sendMessage,
    scrollToBottom,
    lastMessageId,
  }
}
