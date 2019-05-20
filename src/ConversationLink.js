import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ConversationLink.css'

export default function ConversationLink(props) {
  const { to, name, content, isReply } = props
  return (
    <Link to={to} className={styles.Conversation}>
      <span className={styles.Title}>{name}</span>
      <span className={isReply ? styles.ReplyContent : styles.ResponseContent}>
        {content}
      </span>
    </Link>
  )
}
