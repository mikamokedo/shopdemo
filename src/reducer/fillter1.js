import * as CONSTANT from '../constant/index';
const InitialState = null;
const fillterValueText = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANT.ADD_FILLTER_TEXT_SUCCESS:
            state = action.payload.value
           return {...state}
        case CONSTANT.RESET_FILTER :
            state = null
            return {...state}
       
        default:
            return state
    }
}

export default fillterValueText;