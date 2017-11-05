import {
	FETCHING_PRODUCTS,
	FETCHED_PRODUCTS
} from '../actions';

const initialState = {
	isFetching:false,
	isFetched:false,
	products:null
}

export default function (state=initialState,action) {
	switch(action.type){
		case FETCHING_PRODUCTS:
			return {...state,isFetching:true}
			break;
		case FETCHED_PRODUCTS:
			return {...state,isFetching:false,isFetched:true,products:action.payload}
			break;
	}
	return state;
}