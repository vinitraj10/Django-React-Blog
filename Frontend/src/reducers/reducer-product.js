import {
	FETCHING_PRODUCT,
	FETCHED_PRODUCT
} from '../actions';

const initialState = {
	isFetching:false,
	isFetched:false,
	item:null
}

export default function (state=initialState,action) {
	switch(action.type){
		case FETCHING_PRODUCT:
			return {...state,isFetching:true}
			break;
		case FETCHED_PRODUCT:
			return {...state,isFetching:false,isFetched:true,item:action.payload}
			break;
	}
	return state;
}