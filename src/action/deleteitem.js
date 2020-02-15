import * as CONSTANT from '../constant/index';



export const deleteItem = (id) =>{
    return {
        type : CONSTANT.DELETE_ITEM,
        id
    }
}