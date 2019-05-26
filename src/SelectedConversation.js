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

  const submitMessageAnyMaybeGetResponse = () => {
    submitMessage()
    /*
      For added realism, I'm randomly adding responses whenever I send a message.
      There is a 60% chance of creating this response, with 3 different responses.
    */
    if (Math.random() < 0.4) {
      setTimeout(() => {
        const time = Date.now()
        const random = Math.random()
        let content = 'OK sounds good'
        if (random > 0.66) {
          content = 'Tell me more'
        } else if (random < 0.33) {
          content = 'Hmm... let me think about that.'
        }
        setConversations(
          conversations.concat({
            id: time,
            from: 'customer',
            content,
            timestamp: time
          })
        )
      }, 4000)
    }
  }

  const handleSubmitOnEnter = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      submitMessage()
    }
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
          onKeyPress={handleSubmitOnEnter}
          className={styles.ConversationInput}
          placeholder="Type..."
        />
        <div className={styles.ConversationActions}>
          <Button
            disabled={!currentMessage}
            onClick={submitMessageAnyMaybeGetResponse}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
