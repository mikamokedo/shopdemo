
import * as CONSTANT from '../constant/index';
const InitialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const findIndex = (item,state) =>{
    let result = -1;
    if(state.length > 0){
        state.forEach((element,key) =>{
            if(element.id === item.id){
                result = key
            }     
        })
    }
    return result;
}
const addToCart = (state = InitialState, action) => {
    switch (action.type) {
        case CONSTANT.ADDTO_CART:
         let item  = action.payload.item;
         let temp = state;
         let index = findIndex(item,state);
            if(index === -1){
              item = {...item,buy : 1}
                temp.push(item);
                state = temp;
                localStorage.setItem('cart',JSON.stringify(temp));
                return [...state];
             }
         else{
               state[index].buy += 1;  
               localStorage.setItem('cart',JSON.stringify(state));
               return [...state];
         }
         case CONSTANT.EARSE_CART:
            state = [];
            localStorage.removeItem('cart');
            return [...state];
         case CONSTANT.DELETE_CART:
            let item2  = action.payload.item;
            let index2 = findIndex(item2,state);

           if(index2 !== -1){
            let temp2 = state;
            temp2.splice(index2,1);
            state = temp2;
               return [...state]
           }
           break;
        default:
            return state
    }
}

export default addToCart;
