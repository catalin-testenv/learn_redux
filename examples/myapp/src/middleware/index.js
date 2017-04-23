

// https://github.com/gaearon/redux-thunk/blob/master/src/index.js

function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
        console.log('thunk', typeof action)
        if (typeof action === 'function') {
            let newAction = action(dispatch, getState, extraArgument);
            console.log('thunk returned', newAction)
            return newAction;
        }

        return next(action);
    };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;


const logger = store => next => action => {
    console.log('logger#dispatching', action)
    let result = next(action)
    console.log('logger#next state', store.getState())
    return result
}

export {
    thunk,
    logger
}

