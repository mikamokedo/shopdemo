import * as CONSTANT  from '../constant/index';
export const change_loading_status = () =>{
    return {
        type: CONSTANT.CHANGE_LOADING_STATUS
    }
}
export const change_loading_status_false = () =>{
    return {
        type: CONSTANT.CHANGE_LOADING_STATUS_FALSE
    }
}