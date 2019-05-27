import React from 'react'
import styles from './Messages.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import AllConversations from './AllConversations'
import Sidebar from './Sidebar'

export default function Messages() {
  return (
    <div className={styles.MessengerContainer}>
      <Sidebar />
      <Switch>
        <Route
          path="/conversations/all/:conversationId?"
          component={AllConversations}
        />
        <Redirect exact from="/conversations" to="/conversations/all" />
      </Switch>
    </div>
  )
}
