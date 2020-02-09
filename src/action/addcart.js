import * as CONSTANT from '../constant/index'
export const addtoCart = (item) =>{
    return {
        type : CONSTANT.ADDTO_CART,
        payload:{
            item
        }
    }
}
export const deleteCart = (item) =>{
    return {
        type: CONSTANT.DELETE_CART,
        payload: {
            item
        }
    }
}
export const easeCart = () =>{
    return {
        type : CONSTANT.EARSE_CART
    }
}