import {combineReducers} from "redux";
import BlogReducer from "./reducer-blog";
import NewBlogReducer from "./reducer-newBlog";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
	blogs:BlogReducer,
	form:formReducer,
	newpost:NewBlogReducer
})
export default rootReducer;