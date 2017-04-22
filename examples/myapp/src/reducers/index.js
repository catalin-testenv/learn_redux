import { combineReducers } from 'redux'

const increase = (state=1, action) => {
    console.log('increase', state, action)
    switch (action.type) {
        case 'SET_INCREASE':
            return action.increase

        default:
            return state
    }
}

const counter = (state=1, action) => {
    console.log('counter', state, action)
    switch (action.type) {
        case 'INCREASE_COUNTER':
            return state + action.increase

        default:
            return state
    }
}


const todoApp = combineReducers({
    counter,
    increase,
})

export default todoApp

// export default (state = {}, action) => {
//     return {
//         counter: counter(state.counter, action, state),
//         increase: increase(state.increase, action, state),
//     }
// }


