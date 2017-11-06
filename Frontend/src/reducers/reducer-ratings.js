import {
	FETCHING_RATINGS,
	FETCHED_RATINGS
} from '../actions';

const initialState = {
	isFetching:false,
	isFetched:false,
	products:[]
}

export default function (state=initialState,action) {
	switch(action.type){
		case FETCHING_RATINGS:
			return {...state,isFetching:true}
			break;
		case FETCHED_RATINGS:
			return {...state,isFetching:false,isFetched:true,products:action.payload}
			break;
	}
	return state;
}