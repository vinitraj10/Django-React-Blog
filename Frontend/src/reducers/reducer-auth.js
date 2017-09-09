import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from '../actions/types';

const intialState = {
	authenticated:false
}
export default function(state=intialState,action){
	switch(action.type){
		case AUTH_USER:
			return {...state,authenticated:true};
			break;
		case UNAUTH_USER:
			return {...state,authenticated:false};
			break;
		case AUTH_ERROR:
			return {...state,error:action.payload}
			break;
	}
	return state;
}