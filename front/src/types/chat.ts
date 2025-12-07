export interface ChatMessage {
  id: string
  author: 'user' | 'guide'
  message: string
  image?: string
  timestamp: Date
  type: 'text' | 'image'
}

export interface ChatState {
  messages: ChatMessage[]
  isTyping: boolean
  isConnected: boolean
  connectionError?: string
}
