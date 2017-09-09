import {
	FETCHING_POST,
	FETCHED_POST,
	DELETING_POST,
	DELETED_POST
} from '../actions';

const intialState = {
	isFetching :false,
	isFetched:false,
	deleting:false,
	deleted:false,
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
			case DELETING_POST:
				return {...state,deleting:true}
				break;
			case DELETED_POST:
				return {...state,deleted:true}	
		}
	return state;	
}