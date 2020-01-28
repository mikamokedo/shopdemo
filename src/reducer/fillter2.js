import * as CONSTANT from '../constant/index';
const InitialState = null;
const fillterValueSelect = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANT.ADD_FILLTER_SELECT_SUCCESS:
            state = action.payload.value
           return {...state}
        
        
        
        default:
            return state
    }
}

export default fillterValueSelect;