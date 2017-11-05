import {combineReducers} from "redux";
import authReducer from "./reducer-auth";
import shopReducer from "./reducer-shop";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
	form:formReducer,
	auth:authReducer,
	shop:shopReducer
})
export default rootReducer;