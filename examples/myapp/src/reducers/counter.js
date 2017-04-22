const counter = (state=1, action) => {
  console.log('counter', state, action)
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + action.increase

    default:
      return state
  }
}



export default counter
