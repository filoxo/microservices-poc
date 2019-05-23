import React from 'react'
import styles from './Messenger.css'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import AllConversations from './AllConversations'
import Sidebar from './Sidebar'
import { setup } from './DataStore'

setup()

export default function Messenger() {
  return (
    <Router>
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
    </Router>
  )
}
