

export const setUnit = (unit) => {
    return function(dispatch, getState) {
        dispatch({
            type: 'SET_UNIT',
            unit
        });
    };
};

// use with middleware
export const toggleCounter = () => {
    return function(dispatch, getState) {
        dispatch({
            type: 'TOGGLE_COUNTER'
        });
    };
};

// with no middleware
// export const toggleCounter = () => {
//     return function(dispatch, getState) {
//         const { started } = getState().counter;
//         started && clearInterval(started);
//         dispatch({
//             type: 'TOGGLE_COUNTER',
//             started: started ? null : setInterval(() => dispatch(tick()), 1000)
//         });
//     };
// };

export const tick = () => {
    return function(dispatch, getState) {
        dispatch({
            type: 'TICK',
            unit: getState().unit
        });
    };
};


