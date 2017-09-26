export const actionTypes = {
    LOGGING_IN: 'LOGGING_IN',
    LOGGED_IN: 'LOGGED_IN'
}

const timeout = () => new Promise(resolve => setTimeout(() => resolve(), 5000));

export const loggedIn = () => (dispatch) => {
    console.log("loggedIn");
    dispatch({
        type: actionTypes.LOGGING_IN,
        isLoggedIn: false,
        isLoggingInProgress: true
    })
    timeout().then(() => {
        dispatch({
            type: actionTypes.LOGGED_IN,
            isLoggedIn: true,
            isLoggingInProgress: false
        })
    })
};
