import { combineReducers } from 'redux';

const unit = (state=1, action) => {
    switch (action.type) {
        case 'SET_UNIT':
            return action.unit;
        default:
            return state;
    }
};

const counter = (state={started: null, value: 0}, action) => {
    switch (action.type) {
        case 'TOGGLE_COUNTER':
            return Object.assign({}, state, {started: action.started});
        case 'TICK':
            return Object.assign({}, state, {value: state.value + action.unit});
        default:
            return state;
    }
};

const todoApp = combineReducers({
    unit,
    counter
});

// function todoApp(state = {}, action) {
//     return {
//         unit: unit(state.unit, action),
//         counter: counter(state.counter, action)
//     };
// }

export default todoApp;


