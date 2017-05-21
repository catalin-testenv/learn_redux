import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './reducers';
import {thunk, timerMiddleware} from './middleware';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ || (f => f);

const store = createStore(reducer, compose(applyMiddleware(thunk, timerMiddleware), reduxDevTools()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
