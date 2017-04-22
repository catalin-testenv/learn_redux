

// https://github.com/gaearon/redux-thunk/blob/master/src/index.js

function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => next => action => {
        console.log('thunk', typeof action)
        if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
        }

        return next(action);
    };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export {
    thunk
}

