import {CREATING_POST} from "../actions";
import {CREATED_POST} from "../actions";

const intialState = {
	creating:false,
	created:false,
	data:[]
};

export default function(state=intialState,action){
 	switch (action.type) {
 		case CREATING_POST:
 			return {...state,creating:true}
 			break;
 		case CREATED_POST:
 			return {...state,creating:false,created:true,data:action.payload}
 	}
 	return state;
}