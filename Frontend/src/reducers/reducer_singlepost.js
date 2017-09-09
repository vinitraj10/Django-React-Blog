import {
	FETCHING_POST,
	FETCHED_POST
} from '../actions';

const intialState = {
	isFetching :false,
	isFetched:false,
	data:null
}

export default function(state=intialState,action){
	switch (action.type) {
			case FETCHING_POST:
				return {...state,isFetching:true}
				break;
			case FETCHED_POST:
				return {...state,isFetching:false,isFetched:true,data:action.payload}
				break;
		}
	return state;	
}