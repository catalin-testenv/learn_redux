import {tick} from './actions';

// https://github.com/gaearon/redux-thunk/blob/master/src/index.js

function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => (next) => (action) => {
        if (typeof action === 'function') {
            let newAction = action(dispatch, getState, extraArgument);
            return newAction;
        }

        return next(action);
    };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

const timerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    if (action.type === 'TOGGLE_COUNTER' && !getState().counter.started) {
        action.started = setInterval(() => dispatch(tick()), 1000);
    } else if (action.type === 'TOGGLE_COUNTER' && getState().counter.started) {
        action.started = null;
        clearInterval(getState().counter.started);
    }
    next(action);
};

export {
    thunk,
    timerMiddleware
};

