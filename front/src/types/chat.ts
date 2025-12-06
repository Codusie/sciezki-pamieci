export interface ChatMessage {
  id: string
  author: 'user' | 'bot' | 'guide'
  message: string
  image?: string
  timestamp: Date
  isLoading?: boolean
  type: 'text' | 'image' | 'initial'
}

export interface ChatState {
  messages: ChatMessage[]
  isTyping: boolean
  isConnected: boolean
  connectionError?: string
}
