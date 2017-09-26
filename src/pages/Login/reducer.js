import { actionTypes } from './actions';

const INITIAL_STATE = { 
    isLoggedIn: false, 
    isLoggingInProgress: false
 };

export const loginReducer = (state = INITIAL_STATE, action) => {
    console.log(action.type);
    switch (action.type) {
        case actionTypes.LOGGED_IN:
        case actionTypes.LOGGING_IN:
            return { ...state, isLoggedIn: action.isLoggedIn, isLoggingInProgress: action.isLoggingInProgress }
        default:
            return state;
    }
};