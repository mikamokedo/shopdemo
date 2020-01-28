import {takeEvery,put,call,takeLatest} from 'redux-saga/effects';
import {change_loading_status,change_loading_status_false} from '../action/loading';
import {feetListProductsSuccess,feetSingleProductsSuccess} from '../action/products';
import {getMethod,getSingleMethod} from '../api/index';
import {fillterTextSuccess,fillterSelectSuccess} from '../action/fillter';
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

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return true;
    }
    return true;
}


function* feetSingleProductFirebase(idSingle){
    yield put(change_loading_status());
    const id = idSingle.payload.id;
    let data = yield call(getSingleMethod,id);
    yield put(feetSingleProductsSuccess(data));
    yield put(change_loading_status_false());
}
function* addFillterTexttostore(value){
    let temp = value.payload.fillerName;
    if(temp !== ""){
      yield put(fillterTextSuccess(value.payload));
    }

}

function* addFillterSelecttostore(value){
   yield put(fillterSelectSuccess(value.payload));
}



function * rootSaga (){
    yield takeEvery(CONSTANT.FEET_LIST_PRODUCTS,getListProductsFromFirebase);
    yield takeEvery(CONSTANT.FEET_SINGLE_PRODUCTS,feetSingleProductFirebase);
    yield takeLatest(CONSTANT.ADD_FILLTER_TEXT,addFillterTexttostore);
    yield takeLatest(CONSTANT.ADD_FILLTER_SELECT,addFillterSelecttostore);
}

export default rootSaga;