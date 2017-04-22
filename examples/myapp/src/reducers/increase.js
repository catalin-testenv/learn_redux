const increaase = (state=1, action) => {
  console.log('increase', state, action)
  switch (action.type) {
    case 'SET_INCREASE':
      return action.increase

    default:
      return state
  }
}



export default increaase
