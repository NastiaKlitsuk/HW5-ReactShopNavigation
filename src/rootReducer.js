import { combineReducers } from 'redux';
import { productsReducer } from './pages/Products/reducer';
import { cartReducer } from './pages/Cart/reducer';

export default combineReducers({
    productsReducer,
    cartReducer
})
