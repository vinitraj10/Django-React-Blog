import { AUTH_USER } from '../types';

import axios from 'axios';

export function loginUsingFb(body,callback){
    const URL = 'http://localhost:8000/rest-auth/facebook/' 
    //console.log(body);
    return (dispatch) => {
        axios.post(URL,body)
        .then((response)=>{
            dispatch({type: AUTH_USER});
            const {token} = response.data;
            const {username} = response.data.user;
            localStorage.setItem('token',token);
            localStorage.setItem('username',username);
            callback();
        });
       
    }
}

