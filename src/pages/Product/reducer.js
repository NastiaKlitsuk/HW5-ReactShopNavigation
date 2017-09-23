import { actionTypes } from './actions';

const INITIAL_STATE = {cart: {}};

export const productReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_SAVED:
            return { ...state,  
                cart: [
                  ...state.cart,
                  {
                    id: action.id,
                    price: action.price,
                    title: action.title,
                    imageUrl: action.url,
                    description: action.description
                  }
                ] } 
        default:
            return state;
    }
};

export const getSelectedProduct = (state) => {
    return state.productsReducer.selectedProduct;
}
