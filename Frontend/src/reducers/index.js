import {combineReducers} from "redux";
import authReducer from "./reducer-auth";
import shopReducer from "./reducer-shop";
import productReducer from "./reducer-product";
import avgRateReducer from "./reducer-avgrating";
import myratings from './reducer-ratings';
import myorders from './reducer-myorder';
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
	form:formReducer,
	auth:authReducer,
	shop:shopReducer,
	product:productReducer,
	avgrating:avgRateReducer,
	myratings:myratings,
	myorders:myorders,

})
export default rootReducer;