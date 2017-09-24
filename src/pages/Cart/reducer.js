import { actionTypes } from './actions';
import _ from 'lodash';

const INITIAL_STATE = {cart: {}};

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_ADDED_TO_CART:
        return { ...state,  
            cart: [
              ...state.cart,
              {
                id: action.id,
                price: action.price,
                title: action.title,
                imageUrl: action.imageUrl,
                description: action.description
              }
            ] } 
        case actionTypes.PRODUCT_DELETED_FROM_CART:
            const positionProductToRemove = _.findIndex(state.cart, {id: action.id});
            return { ...state,  
                cart: [...state.cart.slice(0, positionProductToRemove),
                        ...state.cart.slice(positionProductToRemove+1)]
                  } 
        default:
            return state;
    }
};

export const getCart = (state) => {
    return state.cartReducer.cart;
}