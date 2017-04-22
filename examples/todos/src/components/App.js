import React from 'react'
import Footer from './Footer'
import MySmartComp from '../containers/MySmartComp'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <MySmartComp increase={3} />
  </div>
)

export default App
