import React from 'react'
import styles from './ConversationSplitContainer.css'

export default function ConversationSplitContainer(props) {
  if (React.Children.count(props.children) !== 2) {
    console.warn(
      'ConversationSplitContainer requires exactly two children elements.'
    )
    return null
  }
  const [leftChild, rightChild] = React.Children.toArray(props.children)
  return (
    <div className={styles.Container}>
      <div className={styles.LeftList}>{leftChild}</div>
      {rightChild}
    </div>
  )
}
