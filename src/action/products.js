import * as CONSTANT from '../constant/index';

export const feetListProducts = () =>{
    return {
        type: CONSTANT.FEET_LIST_PRODUCTS
    }
};
export const feetListProductsSuccess = (data) =>{
    return {
        type: CONSTANT.FEET_LIST_PRODUCTS_SUCCESS,
        payload :{
                data
        }
    }
};

export const feetListProductsError = (error) =>{
    return {
        type: CONSTANT.FEET_LIST_PRODUCTS_SUCCESS,
        payload :{
            error
        }
    }
};

export const feetSingleProducts = (id) =>{
    return {
        type: CONSTANT.FEET_SINGLE_PRODUCTS,
        payload:{
            id
        }
    }
};
export const feetSingleProductsSuccess = (item) =>{
    return {
        type: CONSTANT.FEET_SINGLE_PRODUCTS_SUCCESS,
        payload :{
            item
        }
    }
};