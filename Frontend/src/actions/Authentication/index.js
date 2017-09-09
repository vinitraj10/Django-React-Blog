import axios from 'axios';
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from '../types';

const ROOT_URL = 'http://localhost:8000/accounts/api/';

export function signup(formValue,callback){
	const URL = `${ROOT_URL}register/`;
	return (dispatch) =>{
		axios.post(URL,formValue)
		.then((response)=>{
			dispatch({type:AUTH_USER});
			localStorage.setItem('token',response.data.token);
			callback();
		});
	}

}

export function signin(formValue,callback){
	const URL =`${ROOT_URL}auth/token/`
	return (dispatch) => {
		axios.post(URL,formValue)
		.then((response)=>{
			dispatch({type:AUTH_USER});
			localStorage.setItem('token',response.data.token);
			callback();
		});
	}
}

export function signout(callback){
	localStorage.removeItem('token');
	return (dispatch) =>{
		dispatch({type:UNAUTH_USER});
		callback();
	}
}