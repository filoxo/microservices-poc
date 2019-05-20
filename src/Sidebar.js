import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Sidebar.css'

export default function Sidebar({ children }) {
  return (
    <nav className={styles.Sidebar}>
      <h5>Customers</h5>
      <Link to="/conversations/all">All</Link>
      <Link to="/conversations/unassigned">Unassigned</Link>
      <Link to="/conversations/my-messages">My Messages</Link>
    </nav>
  )
}
