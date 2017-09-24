export const actionTypes = {
    LOGGED_IN: 'LOGGED_IN',
}

const timeout = () => new Promise(resolve => setTimeout(() => resolve(), 5000));

export const loggedIn = () => (dispatch) => {
    timeout().then(() => {
        dispatch({
            type: actionTypes.LOGGED_IN,
            isLoggedIn: true
        })
    })
};