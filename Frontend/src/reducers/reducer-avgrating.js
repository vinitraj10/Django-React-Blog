import {
	FETCHED_RATING
} from '../actions';

const initialState = {
	value:null
}

export default function (state=initialState,action) {
	switch(action.type){
		case FETCHED_RATING:
			return {...state,value:action.payload}
			break;
	}
	return state;
}