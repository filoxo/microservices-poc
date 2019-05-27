import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Dashboard from './Dashboard'

__webpack_public_path__ = 'http://localhost:4444/'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Dashboard,
  domElementGetter: () => document.getElementById('dashboard-ui')
})

export const { bootstrap, mount, unmount } = reactLifecycles
