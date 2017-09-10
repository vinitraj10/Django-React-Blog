import axios from 'axios';
import {
	AUTH_USER,
	UNAUTH_USER,
	SIGNUP_USER
} from '../types';

const ROOT_URL = 'http://localhost:8000/accounts/api/';

export function signup(formValue,callback){
	const URL = `${ROOT_URL}register/`;
	return (dispatch) =>{
		axios.post(URL,formValue)
		.then((response)=>{
			const{username}= response.data;
			console.log(username);
			dispatch({type:SIGNUP_USER});
			localStorage.setItem('token',response.data.token);
			localStorage.setItem('username',username);
			callback();
		});
	}

}

export function signin(formValue,callback){
	const URL =`${ROOT_URL}auth/token/`
	return (dispatch) => {
		axios.post(URL,formValue)
		.then((response)=>{
			const {username}=response.data.user;
			dispatch({type:AUTH_USER});
			localStorage.setItem('token',response.data.token);
			localStorage.setItem('username',username);
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