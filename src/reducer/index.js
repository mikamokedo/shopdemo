import {combineReducers} from 'redux';
import ListProducts from './products';
import loading from './loading';
import singleProducts from './singleProduc';
import fillterValueText from './fillter1';
import fillterValueSelect from './fillter2';
import addToCart from './addcart';
import statusCheckout from './checkout';


const rootReducer = combineReducers({
    ListProducts,
    loading,
    singleProducts,
    fillterValueText,
    fillterValueSelect,
    addToCart,
    statusCheckout
});

export default rootReducer;