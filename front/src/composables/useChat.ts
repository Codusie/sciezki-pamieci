import { ref, computed, nextTick, type MaybeRef, unref } from 'vue'
import type { ChatMessage } from '@/types/chat'
import { useMutation } from '@tanstack/vue-query'
import { httpService } from '@/api'

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

export const useChat = (
  landmarkId: MaybeRef<number>,
  initialPicture?: MaybeRef<string | undefined>,
) => {
  const messages = ref<ChatMessage[]>([])
  const isConnected = ref(false)

  const { mutateAsync: fetchHistory } = useMutation({
    mutationFn: async () => {
      const { data } = await httpService.GET('/chats/{landmark}/history', {
        params: {
          path: {
            landmark: unref(landmarkId),
          },
        },
      })
      return data
    },
  })

  const connect = async () => {
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
      messages.value = [...historyMessages]
    } catch {}

    // Only send initial message if there are no previous messages
    if (messages.value.length === 0) sendInitialMessage()

    isConnected.value = true

    // Add initial picture message without loading
    const initialImageMessage: ChatMessage = {
      id: `initial-image-${Date.now()}`,
      author: 'guide',
      message: '',
      image: unref(initialPicture),
      timestamp: new Date(),
      type: 'image',
    }

    setTimeout(() => {
      if (unref(initialPicture)) messages.value.push(initialImageMessage)
    }, 300)
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
            landmark: unref(landmarkId),
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

  const sendInitialMessage = async () => {
    const INITIAL_MESSAGE = '/initlandmark'

    sendMessage(INITIAL_MESSAGE)
  }

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
