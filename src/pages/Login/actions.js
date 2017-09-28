export const actionTypes = {
    LOGGING_IN: 'LOGGING_IN',
    LOGGED_IN: 'LOGGED_IN'
}

function delay(ms) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, ms)
    });
 }

export const login = () => (dispatch) => {
    dispatch({
        type: actionTypes.LOGGING_IN,
        isLoggedIn: false,
        isLoggingInProgress: true
    })

    return delay(1000).then(() => {
        dispatch({
            type: actionTypes.LOGGED_IN,
            isLoggedIn: true,
            isLoggingInProgress: false
        });
    });
};
