import axios from 'axios';
import {
  AUTH_USER,
  UNAUTH_USER,
  SIGNUP_USER,
  AUTH_ERROR
} from '../types';

const ROOT_URL = 'https://djminapi.herokuapp.com/accounts/api/';

export function signup (formValue, callback) {
  const URL = `${ROOT_URL}register/`;
  return (dispatch) => {
    axios.post(URL, formValue)
      .then((response) => {
        const { username } = response.data;
        dispatch({ type: SIGNUP_USER });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', username);
        callback();
      })
      .catch((error) => {
        dispatch({ type: AUTH_ERROR, payload: 'ERROR OCCURED USERNAME MAY EXISTS IN DATABASE' });
      });
  };
}

export function signin (formValue, callback) {
  const URL =`${ROOT_URL}home/login/token/`;
  return (dispatch) => {
    axios.post(URL,formValue)
    .then((response)=>{
      const {username}=response.data.user;
      dispatch({type:AUTH_USER});
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('username',username);
      callback();
    })
    .catch((err)=>{
      dispatch({type:AUTH_ERROR,payload:'BAD LOGIN CREDENTIALS'});
    })
  }
}

export function signout(callback){
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  return (dispatch) =>{
    dispatch({type:UNAUTH_USER});
    callback();
  }
}