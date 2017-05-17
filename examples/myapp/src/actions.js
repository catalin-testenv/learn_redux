

export const setUnit = (unit) => {
    return function(dispatch, getState) {
        dispatch({
            type: 'SET_UNIT',
            unit
        });
    };
};

export const toggleCounter = () => {
    return function(dispatch, getState) {
        dispatch({
            type: 'TOGGLE_COUNTER'
        });
    };
};

export const tick = () => {
    return function(dispatch, getState) {
        dispatch({
            type: 'TICK',
            unit: getState().unit
        });
    };
};


