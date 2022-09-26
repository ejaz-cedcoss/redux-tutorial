import { BUY_ICECREAM } from "./IceTypes"

const initialState = {
    numOfIcecream:20
}

export const icecreamReducer = (state = initialState,action)=>{
      switch(action.type){
        case BUY_ICECREAM:
            return{
               ...state,
               numOfIcecream:state.numOfIcecream - 1
            }
        default:
            return state
      }
}