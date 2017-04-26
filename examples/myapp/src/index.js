import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers'
import { applyMiddleware } from 'redux'
import {thunk, logger, counterIsOdd} from './middleware'

const store = createStore(reducer, applyMiddleware(logger, counterIsOdd, thunk))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
