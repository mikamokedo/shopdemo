import * as CONSTANT  from '../constant/index';
const InitialState = {
    loading: false
}
const loading  = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANT.CHANGE_LOADING_STATUS:
            return {...state,loading: true}

            case CONSTANT.CHANGE_LOADING_STATUS_FALSE:
                return {...state,loading: false}
        default:
            return  {...state}
    }
}
export default loading;