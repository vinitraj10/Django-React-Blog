import {FETCHING_BLOG} from "../actions";
import {FETCHED_BLOG} from "../actions";
import {ERROR} from "../actions";

const intialState = {
	isFetching:false,
	isFetched:false,
	error:null,
	posts:[]
}

export default function(state=intialState,action){
	switch(action.type){
		case FETCHING_BLOG:
			return {...state,isFetching:true};
			break;
		case FETCHED_BLOG:
			return {...state,isFetching:false,isFetched:true,posts:action.payload.data};
			break;
		case ERROR:
			return {...state,isFetching:false,isFetched:false,error:action.payload};
			break;
	}
	return state;
}