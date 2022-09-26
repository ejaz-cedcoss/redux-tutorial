import { combineReducers } from "redux";
import cakeReducer from "../CAKES/CakeReducer";
import { icecreamReducer } from "../ICECREAM/IceReducer";

const rootReducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})

export default rootReducer