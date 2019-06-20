import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setup } from './DataStore'
import ChatPopup from './ChatPopup'
import asyncCmp from './asyncComponent'

const Messages = asyncCmp(() => import('./Messages').then(mod => mod.default))

setup()

export default class Messenger extends React.Component {
  state = {
    hasError: false
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <div>Error</div>
    }
    return (
      <Router>
        <Route path="/conversations" component={Messages} />
        <ChatPopup />
      </Router>
    )
  }
}
