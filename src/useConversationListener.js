import { useState, useEffect } from 'react'

export default function useConversationListener() {
  const [conversationId, setConversationId] = useState(null)

  useEffect(() => {
    const listener = e => {
      setConversationId(e.detail.conversationId)
    }
    document.addEventListener('conversation:popup', listener)
    return () => {
      document.removeEventListener('conversation:popup', listener)
    }
  }, [])

  return conversationId
}
