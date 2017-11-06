import {
	FETCHING_MYORDER,
	FETCHED_MYORDER
} from '../actions';

const initialState = {
	isFetching:false,
	isFetched:false,
	product:null
}

export default function (state=initialState,action) {
	switch(action.type){
		case FETCHING_MYORDER:
			return {...state,isFetching:true}
			break;
		case FETCHED_MYORDER:
			return {...state,isFetching:false,isFetched:true,product:action.payload}
			break;
	}
	return state;
}