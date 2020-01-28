import * as CONSTANT from '../constant/index';
export const fillterText = (value) =>{
    return {
        type: CONSTANT.ADD_FILLTER_TEXT,
        payload:value
    }
}

export const fillterTextSuccess = (value) =>{
    return {
        type: CONSTANT.ADD_FILLTER_TEXT_SUCCESS,
        payload:{value}
    }
}
export const fillterSelect = (value) =>{
    return {
        type: CONSTANT.ADD_FILLTER_SELECT,
        payload:value
    }
}

export const fillterSelectSuccess = (value) =>{
    return {
        type: CONSTANT.ADD_FILLTER_SELECT_SUCCESS,
        payload:{value}
    }
}