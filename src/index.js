import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'

import Messenger from './Messenger'

__webpack_public_path__ = 'http://localhost:5555/'

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Messenger,
  domElementGetter: () => document.getElementById('messenger-ui')
})

export const bootstrap = [reactLifecycles.bootstrap]

export const mount = [reactLifecycles.mount]

export const unmount = [reactLifecycles.unmount]
