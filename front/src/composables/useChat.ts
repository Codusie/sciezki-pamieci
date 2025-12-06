import { ref, computed, nextTick, type MaybeRef, unref } from 'vue'
import type { ChatMessage } from '@/types/chat'
import { useMutation } from '@tanstack/vue-query'
import { httpService } from '@/api'

export const useChat = (
  landmarkId: number,
  guideName: string,
  initialPicture?: MaybeRef<string | undefined>,
) => {
  const messages = ref<ChatMessage[]>([])
  const isConnected = ref(false)

  // Mock connection delay
  const connect = async () => {
    sendInitialMessage()

    isConnected.value = true

    // Add initial picture message without loading
    const initialImageMessage: ChatMessage = {
      id: `initial-image-${Date.now()}`,
      author: 'guide',
      authorName: guideName,
      message: '',
      image: unref(initialPicture),
      timestamp: new Date(),
      isLoading: false,
      type: 'image',
    }

    setTimeout(() => {
      if (unref(initialPicture)) messages.value.push(initialImageMessage)
    }, 300)
  }

  const { mutate: sendMessage, isPending: isTyping } = useMutation({
    onMutate: (messageText: string) => {
      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        author: 'user',
        message: messageText,
        timestamp: new Date(),
        type: 'text',
      }
      messages.value.push(userMessage)
    },
    mutationFn: async (messageText: string) => {
      const { data } = await httpService.POST('/chats/{landmark}/message', {
        body: {
          message: messageText,
        },
        params: {
          path: {
            landmark: landmarkId,
          },
        },
      })
      return data
      // return Promise.resolve({
      //   message: messageText,
      // })
    },

    onSuccess: (responseText) => {
      console.log('🚀 ~ useChat ~ responseText:', responseText)
      const guideMessage: ChatMessage = {
        id: `guide-${Date.now()}`,
        author: 'guide',
        authorName: guideName,
        // @ts-expect-error TODO
        message: responseText.message as string,
        timestamp: new Date(),
        isLoading: false,
        type: 'text',
      }

      messages.value.push(guideMessage)
    },
  })

  const sendInitialMessage = async () => {
    const INITIAL_MESSAGE =
      'Cześć! Chciałbym dowiedzieć się więcej o tym miejscu. Co możesz mi o nim opowiedzieć?'

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
