import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from '../actions/types';

export default function(state={},action){
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