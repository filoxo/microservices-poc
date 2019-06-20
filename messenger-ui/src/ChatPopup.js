import React from 'react'
import ReactDOM from 'react-dom'
import styles from './ChatPopup.css'
import SelectedConversation from './SelectedConversation'
import useConversationListener from './useConversationListener'
import { ReactComponent as Close } from './icons/close-outline.svg'
import IconButton from './IconButton'

export default function ChatPopup() {
  const conversationId = useConversationListener()

  const closeConversation = () => {
    var event = new CustomEvent('conversation:popup', {
      detail: { conversationId: null }
    })
    document.dispatchEvent(event)
  }

  return conversationId
    ? ReactDOM.createPortal(
        <div className={styles.ChatPopup}>
          <div className={styles.ConversationWrapper}>
            <SelectedConversation
              conversationId="23456"
              toolbar={
                <div className={styles.Title}>
                  Conversation
                  <IconButton
                    onClick={closeConversation}
                    label="Close conversation"
                  >
                    <Close width="16" />
                  </IconButton>
                </div>
              }
            />
          </div>
        </div>,
        document.getElementById('chat-popup')
      )
    : null
}
