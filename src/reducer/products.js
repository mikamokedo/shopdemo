import * as CONSTANT from '../constant/index';
const InitialState = [];
const ListProducts = (state = InitialState, action) => {
    switch (action.type) {
    case CONSTANT.FEET_LIST_PRODUCTS_SUCCESS:
        state = action.payload.data;
        return [...state]
        default:
            return state
    }
}

export default ListProducts;
