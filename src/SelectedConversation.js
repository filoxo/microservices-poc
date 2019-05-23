import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import ChatBubble from './ChatBubble'
import Button from './Button'
import styles from './SelectedConversation.css'
import { get, set } from './DataStore'

export default function SelectedConversation(props) {
  const [conversations, setConversations] = useState([])
  const [currentMessage, setCurrentMessage] = useState('')
  const conversationListRef = useRef(null)

  useEffect(() => {
    const convos = get(`conversation:${props.conversationId}`, [])
    setConversations(convos)
  }, [props.conversationId])

  useEffect(() => {
    set(`conversation:${props.conversationId}`, conversations)
  }, [conversations])

  useLayoutEffect(() => {
    conversationListRef.current.scrollTop =
      conversationListRef.current.scrollHeight
  }, [conversations])

  const submitMessage = () => {
    const time = Date.now()
    setConversations(
      conversations.concat({
        id: time,
        from: 'location',
        content: currentMessage,
        timestamp: time
      })
    )
    setCurrentMessage('')
  }

  return (
    <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
      <article className={styles.ConversationList} ref={conversationListRef}>
        {conversations.map(message => (
          <ChatBubble
            key={message.id}
            isExternalSender={message.from !== 'location'}
          >
            {message.content}
          </ChatBubble>
        ))}
      </article>
      <div className={styles.ConversationInputArea}>
        <textarea
          value={currentMessage}
          onChange={e => setCurrentMessage(e.target.value)}
          className={styles.ConversationInput}
          placeholder="Type..."
        />
        <div className={styles.ConversationActions}>
          <Button disabled={!currentMessage} onClick={submitMessage}>
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
