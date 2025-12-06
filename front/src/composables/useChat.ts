import { ref, computed, nextTick } from 'vue'
import type { ChatMessage } from '@/types/chat'

export const useChat = (landmarkId: number, initialMessage: string, initialPicture: string) => {
  const messages = ref<ChatMessage[]>([])
  const isTyping = ref(false)
  const newMessage = ref('')
  const isConnected = ref(false)

  // Mock connection delay
  const connect = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800))
    isConnected.value = true

    // Add initial picture message with loading
    const initialImageMessage: ChatMessage = {
      id: `initial-image-${Date.now()}`,
      author: 'guide',
      message: '',
      image: initialPicture,
      timestamp: new Date(),
      isLoading: true,
      type: 'image',
    }

    messages.value.push(initialImageMessage)

    // Simulate image loading
    setTimeout(() => {
      initialImageMessage.isLoading = false
    }, 1200)

    // Add initial text message with typing effect
    setTimeout(() => {
      const initialTextMessage: ChatMessage = {
        id: `initial-text-${Date.now()}`,
        author: 'guide',
        message: '',
        timestamp: new Date(),
        isLoading: true,
        type: 'initial',
      }

      messages.value.push(initialTextMessage)

      // Simulate typing effect for initial message
      typeMessage(initialTextMessage, initialMessage)
    }, 1500)
  }

  const typeMessage = async (messageObj: ChatMessage, fullText: string) => {
    messageObj.isLoading = false
    const words = fullText.split(' ')

    for (let i = 0; i < words.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 100 + Math.random() * 100))
      messageObj.message = words.slice(0, i + 1).join(' ')
    }
  }

  const sendMessage = async () => {
    if (!newMessage.value.trim() || isTyping.value) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      author: 'user',
      message: newMessage.value,
      timestamp: new Date(),
      type: 'text',
    }

    messages.value.push(userMessage)
    const messageText = newMessage.value
    newMessage.value = ''

    // Show typing indicator
    isTyping.value = true

    // Mock API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500 + Math.random() * 1000))

    // Generate mock response
    const responses = [
      "That's an interesting question about this landmark. Let me share some fascinating details with you.",
      "I'd be happy to tell you more about the history and significance of this place.",
      "This landmark has a rich story. Here's what makes it special...",
      'Great question! This location has some unique features that are worth exploring.',
      'I can provide you with detailed information about this remarkable place.',
    ]

    const botMessage: ChatMessage = {
      id: `bot-${Date.now()}`,
      author: 'bot',
      message: '',
      timestamp: new Date(),
      isLoading: false,
      type: 'text',
    }

    messages.value.push(botMessage)
    isTyping.value = false

    // Type the response
    const response = responses[Math.floor(Math.random() * responses.length)]
    await typeMessage(botMessage, `${response} You asked: "${messageText}"`)
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
    newMessage,
    isConnected,
    connect,
    sendMessage,
    scrollToBottom,
    lastMessageId,
  }
}
