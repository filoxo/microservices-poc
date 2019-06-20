import React from 'react'
import styles from './IconButton.css'
import SrText from './SrText'

export default function IconButton({ children, label, ...props }) {
  return (
    <button type="button" {...props} className={styles.IconButton}>
      {children}
      <SrText>{label}</SrText>
    </button>
  )
}
