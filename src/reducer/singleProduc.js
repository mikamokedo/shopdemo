import * as CONSTANT from '../constant/index';
const InitialState = {};
const singleProducts = (state = InitialState, action) => {
    switch (action.type) {
    case CONSTANT.FEET_SINGLE_PRODUCTS_SUCCESS:
        state = action.payload.item;
        return {...state}
        default:
            return state
    }
}

export default singleProducts;