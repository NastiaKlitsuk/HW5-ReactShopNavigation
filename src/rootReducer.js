import { combineReducers } from 'redux';
import { productsReducer } from './pages/Products/reducer';
import { cartReducer } from './pages/Cart/reducer';
import { loginReducer} from './pages/Login/reducer';
import { modelReducer } from 'react-redux-form';

export default combineReducers({
    productsReducer,
    cartReducer,
    loginReducer,
    user: modelReducer('user', { name: '' })
})