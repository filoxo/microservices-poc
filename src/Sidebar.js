import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.css'

const urls = {
  allConversations: '/conversations/all',
  unassignedConversations: '/conversations/unassigned',
  myMessages: '/conversations/my-messages'
}
export default function Sidebar(props) {
  return (
    <nav className={styles.Sidebar}>
      <h5>Customers</h5>
      <NavLink
        aria-current="location"
        className={styles.SidebarLink}
        to={urls.allConversations}
      >
        All
      </NavLink>
      <NavLink
        aria-current="location"
        className={styles.SidebarLink}
        to={urls.unassignedConversations}
      >
        Unassigned
      </NavLink>
      <NavLink
        aria-current="location"
        className={styles.SidebarLink}
        to={urls.myMessages}
      >
        My Messages
      </NavLink>
    </nav>
  )
}
