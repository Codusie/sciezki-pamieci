import { ref, computed, nextTick } from 'vue'
import type { ChatMessage } from '@/types/chat'

export const useChat = (
  landmarkId: number,
  initialMessage: string,
  guideName: string,
  initialPicture?: string,
) => {
  const messages = ref<ChatMessage[]>([])
  const isTyping = ref(false)
  const isConnected = ref(false)

  // Mock connection delay
  const connect = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    isConnected.value = true

    // Add initial picture message without loading
    const initialImageMessage: ChatMessage = {
      id: `initial-image-${Date.now()}`,
      author: 'guide',
      authorName: guideName,
      message: '',
      image: initialPicture,
      timestamp: new Date(),
      isLoading: false,
      type: 'image',
    }

    if (initialPicture) messages.value.push(initialImageMessage)

    // Automatically send initial user message (hidden) to trigger guide response
    setTimeout(() => {
      sendInitialMessage(initialMessage)
    }, 2000)
  }

  const getMockGuideResponse = () => {
    return "Thank you for your question! As your guide, I'd be happy to share more details about this fascinating landmark. What specific aspect would you like to explore further?"
  }

  const getInitialGuideResponse = (prompt: string) => {
    return prompt
  }

  const sendInitialMessage = async (prompt: string) => {
    // Show typing indicator for consistent loading state
    isTyping.value = true

    // Mock API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Send initial guide response based on prompt
    const guideMessage: ChatMessage = {
      id: `guide-initial-${Date.now()}`,
      author: 'guide',
      authorName: guideName,
      message: getInitialGuideResponse(prompt),
      timestamp: new Date(),
      isLoading: false,
      type: 'text',
    }

    messages.value.push(guideMessage)
    isTyping.value = false
  }

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isTyping.value) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      author: 'user',
      message: messageText,
      timestamp: new Date(),
      type: 'text',
    }

    messages.value.push(userMessage)

    // Show typing indicator
    isTyping.value = true

    // Mock API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simple mock response
    const mockResponse = getMockGuideResponse()

    const guideMessage: ChatMessage = {
      id: `guide-${Date.now()}`,
      author: 'guide',
      authorName: guideName,
      message: mockResponse,
      timestamp: new Date(),
      isLoading: false,
      type: 'text',
    }

    messages.value.push(guideMessage)
    isTyping.value = false
  }

  const scrollToBottom = () => {
    nextTick(() => {
      const chatContainer = document.querySelector('.chat-messages')
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
