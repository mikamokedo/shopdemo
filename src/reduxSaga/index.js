import {takeEvery,put,call,takeLatest,select} from 'redux-saga/effects';
import {change_loading_status,change_loading_status_false} from '../action/loading';
import {feetListProductsSuccess,feetSingleProductsSuccess} from '../action/products';
import {getMethod,getSingleMethod,fillterbycate,uploadImgFirebase,pushProductToFirebase} from '../api/index';
import {fillterTextSuccess,fillterSelectSuccess,resetfill} from '../action/fillter';
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
    return false;
}


function* feetSingleProductFirebase(idSingle){
    yield put(change_loading_status());
    const id = idSingle.payload.id;
    let data = yield call(getSingleMethod,id);
    yield put(feetSingleProductsSuccess(data));
    yield put(change_loading_status_false());
}
function* addFillterTexttostore(value){
    yield put(fillterTextSuccess(value.payload));
    

}

function* addFillterSelecttostore(value){
   yield put(fillterSelectSuccess(value.payload));
}
function* submitFillterButton(){
    const textSearch = yield select(state => state.fillterValueText);
    const cateSearch = yield select(state => state.fillterValueSelect);
  
   if(isEmpty(cateSearch)){
    let data = yield call(fillterbycate,cateSearch.fillCate);
    if(cateSearch.fillCate !== "all"){
    if(isEmpty(textSearch)){
        yield put(change_loading_status());
        let data2 = data.filter((value) =>{
            return value.name.trim().toLowerCase().includes(textSearch.fillerName.trim().toLowerCase());
        })
        yield put(feetListProductsSuccess(data2));
        yield put(resetfill());
        yield put(change_loading_status_false());
    }
      else{
        yield put(feetListProductsSuccess(data));
        yield put(resetfill());
      }}
      else{
        if(isEmpty(textSearch)){
            yield put(change_loading_status());
            let data2 = data.filter((value) =>{
                return value.name.trim().toLowerCase().includes(textSearch.fillerName.trim().toLowerCase());
            })
            yield put(feetListProductsSuccess(data2));
            yield put(resetfill());
            yield put(change_loading_status_false());
        
        }
        else{
            yield put(change_loading_status());
            let data = yield call(getMethod);
            let listProducts = [];
            data.forEach(element => {
                let temp  = element.data();
                 temp =   {...temp,id:element.id}
                listProducts.push(temp);
               });
            yield put(feetListProductsSuccess(listProducts));
            yield put(resetfill());
            yield put(change_loading_status_false());
          }
      }
   }
   else if(isEmpty(textSearch)){
    yield put(change_loading_status());   
    let data = yield select(state => state.ListProducts);
    let data2 = data.filter((value) =>{
        return value.name.trim().toLowerCase().includes(textSearch.fillerName.trim().toLowerCase());
    })
    yield put(feetListProductsSuccess(data2));
    yield put(resetfill());
    yield put(change_loading_status_false());
    }
}
function * pustToFireBase (item){
    yield put(change_loading_status());
    const fileImg = item.payload.item.filechoice;
    let url = yield call(uploadImgFirebase,fileImg);
   let itemnoUrl =  yield select(state => state.itemadd);
   delete itemnoUrl.filechoice;
   itemnoUrl.image = url;
   yield call(pushProductToFirebase,itemnoUrl);
   yield put(change_loading_status_false());

}




function * rootSaga (){
    yield takeEvery(CONSTANT.FEET_LIST_PRODUCTS,getListProductsFromFirebase);
    yield takeEvery(CONSTANT.FEET_SINGLE_PRODUCTS,feetSingleProductFirebase);
    yield takeLatest(CONSTANT.ADD_FILLTER_TEXT,addFillterTexttostore);
    yield takeLatest(CONSTANT.ADD_FILLTER_SELECT,addFillterSelecttostore);
    yield takeLatest(CONSTANT.SUBMIT_SEARCH,submitFillterButton);
    yield takeLatest(CONSTANT.PUSH_ITEM_TO_STORE,pustToFireBase);
}

export default rootSaga;