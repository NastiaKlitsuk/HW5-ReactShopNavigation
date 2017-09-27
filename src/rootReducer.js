import { combineReducers } from 'redux';
import { productsReducer } from './pages/Products/reducer';
import { cartReducer } from './pages/Cart/reducer';
import { loginReducer} from './pages/Login/reducer';
import { modelReducer } from 'react-redux-form';
import { menuReducer } from './components/Menu/reducer';

export default combineReducers({
    productsReducer,
    cartReducer,
    loginReducer,
    menuReducer,
    user: modelReducer('user', { name: '' })
})