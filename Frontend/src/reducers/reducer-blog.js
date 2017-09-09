import {FETCHING_BLOGS} from "../actions";
import {FETCHED_BLOGS} from "../actions";
import {ERROR} from "../actions";
import {POST_DELETED} from "../actions";

const intialState = {
	isFetching:false,
	isFetched:false,
	error:null,
	posts:[]
}

export default function(state=intialState,action){
	switch(action.type){
		case FETCHING_BLOGS:
			return {...state,isFetching:true};
			break;
		case FETCHED_BLOGS:
			return {...state,isFetching:false,isFetched:true,posts:action.payload.data};
			break;
		case ERROR:
			return {...state,isFetching:false,isFetched:false,error:action.payload};
			break;
		case POST_DELETED:
			return {...state,posts:action.payload.data}
			break;
	}
	return state;
}