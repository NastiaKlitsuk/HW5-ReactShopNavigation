import { combineReducers } from 'redux';
import { productsReducer } from './pages/Products/reducer';
import { cartReducer } from './pages/Cart/reducer';
import { loginReducer} from './pages/Login/reducer';

export default combineReducers({
    productsReducer,
    cartReducer,
    loginReducer
})