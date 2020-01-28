import {combineReducers} from 'redux';
import ListProducts from './products';
import loading from './loading';
import singleProducts from './singleProduc';
import fillterValueText from './fillter1';
import fillterValueSelect from './fillter2';


const rootReducer = combineReducers({
    ListProducts,
    loading,
    singleProducts,
    fillterValueText,
    fillterValueSelect
});

export default rootReducer;