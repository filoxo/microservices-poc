import React from 'react'
import View from './View'
import { ReactComponent as AngryDolphin } from './angry.svg'

export default class Dashboard extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            maxHeight: 'calc(100vh - 50px)',
            minHeight: 'calc(100vh - 50px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <AngryDolphin width="200" height="200" />
          <h1 style={{ marginTop: '1.5rem' }}>Uh-oh! Something went wrong.</h1>
        </div>
      )
    }
    return <View />
  }
}
