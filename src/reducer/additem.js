import * as CONSTANT from '../constant/index';

const initState = {

}

const itemadd = (state = initState, action) => {
    switch (action.type) {
    case CONSTANT.PUSH_ITEM_TO_STORE:
       const {item}  = action.payload;
       state = item;
       return {...state};

           
     
    
   
        default:
            return state
    }
}

export default itemadd
