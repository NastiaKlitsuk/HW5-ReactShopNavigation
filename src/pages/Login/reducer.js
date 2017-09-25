import { actionTypes } from './actions';

const INITIAL_STATE = { isLoggedIn: false, isLoggingInProgress: false };

export const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOGGED_IN:
            return { ...state, isLoggedIn: true }
        default:
            return state;
    }
};