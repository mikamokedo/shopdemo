import {takeEvery,put,call} from 'redux-saga/effects';
import {change_loading_status,change_loading_status_false} from '../action/loading';
import {feetListProductsSuccess} from '../action/products';
import {getMethod} from '../api/index';
import * as CONSTANT from '../constant/index';

function* getListProductsFromFirebase(){
    yield put(change_loading_status());
    let data = yield call(getMethod);
    let listProducts = [];
    data.forEach(element => {
        let temp  = element.data();
         temp =   {...temp,id:element.id}
        listProducts.push(temp);
       });
       yield put(feetListProductsSuccess(listProducts));
       yield put(change_loading_status_false());

}









function * rootSaga (){
    yield takeEvery(CONSTANT.FEET_LIST_PRODUCTS,getListProductsFromFirebase)
}

export default rootSaga;