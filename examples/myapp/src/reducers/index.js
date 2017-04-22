import { combineReducers } from 'redux'
import counter from './counter'
import increase from './increase'

const todoApp = combineReducers({
  counter,
  increase
})

export default todoApp
