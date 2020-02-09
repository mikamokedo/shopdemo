import * as CONSTANT from '../constant/index';

export const pushItemTostore  = (item) =>{
    return {
        type : CONSTANT.PUSH_ITEM_TO_STORE,
        payload : {
            item
        }
    }
};
export const pushurlTostore = (url) =>{
    return {
     type: CONSTANT.PUSH_URL,
    url
    } 
}