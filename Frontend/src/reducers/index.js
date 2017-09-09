import {combineReducers} from "redux";
import BlogReducer from "./reducer-blog";
import NewBlogReducer from "./reducer-newBlog";
import SinglePostReducer from "./reducer_singlepost";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
	blogs:BlogReducer,
	form:formReducer,
	newpost:NewBlogReducer,
	post:SinglePostReducer
})
export default rootReducer;