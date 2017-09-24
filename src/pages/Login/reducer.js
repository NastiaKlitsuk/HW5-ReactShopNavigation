import { actionTypes } from './actions';

const INITIAL_STATE = { isLoggedIn: false };

export const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.LOGGED_IN:
            return { ...state, isLoggedIn: action.isLoggedIn }
        default:
            return state;
    }
};