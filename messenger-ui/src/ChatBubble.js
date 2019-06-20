import React from 'react'
import styles from './ChatBubble.css'

export default function ChatBubble(props) {
  const { isExternalSender, children } = props
  return (
    <p className={isExternalSender ? styles.ChatFrom : styles.ChatTo}>
      {children}
    </p>
  )
}
