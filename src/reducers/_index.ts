import { combineReducers } from "redux";
import cartReducer from "./_cart";

const rootReducer = combineReducers({
    cartReducer
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>