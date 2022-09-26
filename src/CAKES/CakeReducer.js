import { act } from "react-dom/test-utils"
import { BUY_CAKE } from "./CakeTypes"


const initialState = {
    numOfCakes:10
}

const cakeReducer = (state = initialState,action) =>{

    switch(action.type){
        case BUY_CAKE:
            return{
              ...state,
              numOfCakes:state.numOfCakes - 1
            }
        default:
            return state
    }

}

export default cakeReducer;