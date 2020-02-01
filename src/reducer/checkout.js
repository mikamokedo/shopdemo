import * as CONSTANT from '../constant/index';
const initialState = false;
const statusCheckout = (state = initialState, action) =>{
switch (action.type){
        case CONSTANT.OFF_CHECKOUT:
            state = true;
            return state


        default :
            return state

    
}



}
export default statusCheckout;