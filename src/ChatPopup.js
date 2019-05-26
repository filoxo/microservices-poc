import React from 'react'
import ReactDOM from 'react-dom'
import styles from './ChatPopup.css'
import SelectedConversation from './SelectedConversation'

export default function ChatPopup() {
  return ReactDOM.createPortal(
    <div className={styles.ChatPopup}>
      <div className={styles.Title}>Conversation</div>
      <div className={styles.ConversationWrapper}>
        <SelectedConversation conversationId="23456" />
      </div>
    </div>,
    document.getElementById('chat-popup')
  )
}
