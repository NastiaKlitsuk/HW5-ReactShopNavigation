export const actionTypes = {
    LOGGED_IN: 'LOGGED_IN',
}

export const loggedIn = (isLoggedIn) => ({
    type: actionTypes.LOGGED_IN,
    isLoggedIn: isLoggedIn
})