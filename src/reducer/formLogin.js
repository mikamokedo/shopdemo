import * as CONSTANT from '../constant/index';
const InitialState = {
    openRegister : false,
    openLogin : false,
    loginsuccess : false 
};
const loginForm = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANT.CHANGE_STATUS_OPEN_FORM_REGIS:
           let result1 = !state.openRegister;
           return {...state,openRegister:result1}

           case CONSTANT.CHANGE_STATUS_OPEN_FORM_LOGIN:
            let result2 = !state.openLogin;
            return {...state,openLogin:result2}
            
            
            case CONSTANT.LOGIN_SUCCESS:
            return {...state,loginsuccess:true}

            case CONSTANT.SIGNOUT:
            return {...state,loginsuccess:false}
            



        default:
            return state
    }
};
export default loginForm;