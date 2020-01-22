import {combineReducers} from 'redux';
import ListProducts from './products';
import loading from './loading';

const rootReducer = combineReducers({
    ListProducts,
    loading
});

export default rootReducer;