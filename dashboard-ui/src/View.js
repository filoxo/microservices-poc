import React, { useState } from 'react'
import styles from './View.css'

export default function View() {
  const [_state, setState] = useState(null)

  const handleClick = () => {
    setState(() => {
      throw new Error('OH NO')
    })
  }

  return <div className={styles.Dashboard} onClick={handleClick} />
}
