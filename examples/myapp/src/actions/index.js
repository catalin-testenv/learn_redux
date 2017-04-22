

export const increaseCounter = () => {
    return function(dispatch, getState) {
        setTimeout(() => {
            dispatch({
                type: 'INCREASE_COUNTER',
                increase: getState().increase
            })
        }, 200)

    }
}

export const setIncrease = (increase) => {
    return {
        type: 'SET_INCREASE',
        increase
    }
}
