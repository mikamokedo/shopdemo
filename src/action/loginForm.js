import * as CONSTANT from '../constant/index';

export const changeStatusOpenFormAction = () =>{
    return {
        type: CONSTANT.CHANGE_STATUS_OPEN_FORM_REGIS
    }
}
export const changeStatusOpenFormLoginAction = () =>{
    return {

        type: CONSTANT.CHANGE_STATUS_OPEN_FORM_LOGIN
    }
}
export const loginsucces = () =>{
    return {
        type: CONSTANT.LOGIN_SUCCESS
    }
}

export const signout = () =>{
    return {type: CONSTANT.SIGNOUT}
}