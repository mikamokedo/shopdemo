import {combineReducers} from 'redux';
import ListProducts from './products';
import loading from './loading';
import singleProducts from './singleProduc';

const rootReducer = combineReducers({
    ListProducts,
    loading,
    singleProducts
});

export default rootReducer;