import { combineReducers } from 'redux';
import { productsReducer } from './pages/Products/reducer';
import { productReducer } from './pages/Product/reducer';


export default combineReducers({
    productsReducer,
    productReducer
})
