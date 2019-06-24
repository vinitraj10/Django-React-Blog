/* eslint-disable no-tabs */
import axios from 'axios';
import { tokenHeader } from '../utils/headers';

export const FETCHING_BLOGS = 'FETCHING_BLOGS';
export const FETCHED_BLOGS = 'FETCHED_BLOGS';
export const ERROR = 'ERROR';

export const CREATING_POST = 'CREATING_POST';
export const CREATED_POST = 'CREATE_POST';

export const DELETING_POST = 'DELETING_POST';
export const DELETED_POST = 'DELETED_POST';

export const FETCHING_POST = 'FETCHING_POST';
export const FETCHED_POST = 'FETCHED_POST';

export const EDITING_POST = 'EDITING_POST';
export const EDITED_POST = 'EDITED_POST';

const ROOT_URL = 'https://djminapi.herokuapp.com/';

export function getBlogs() {
  const SUB_URL = 'blog/api/';
  const url = `${ROOT_URL}${SUB_URL}`;

  const request = axios.get(url, tokenHeader());

  return (dispatch) => {
    dispatch({ type: FETCHING_BLOGS });
    request.then((response) => {
      dispatch({ type: FETCHED_BLOGS, payload: response });
    })
      .catch((err) => {
        dispatch({ type: ERROR, payload: err });
      });
  };
}

export function createPost(fromValue, callback) {
  const SUB_URL = 'blog/api/create/';
  const url = `${ROOT_URL}${SUB_URL}`;
  // console.log(props);
  console.log(tokenHeader());
  const request = axios
    .post(url, fromValue, tokenHeader())
    .then(() => callback());

  return {
    type: CREATED_POST,
    payload: request,
  };
  /* return (dispatch) => {
	  dispatch({type:CREATING_POST});
		request.then((response)=>{
			dispatch({type:CREATED_POST,payload:response.data});
		});
	} */
}

export function deletePost(id, callback) {
  const SUB_URL = `blog/api/delete/${id}`;
  const url = `${ROOT_URL}${SUB_URL}`;
  const request = axios.delete(url, tokenHeader());

  return (dispatch) => {
    dispatch({ type: DELETING_POST });
    request.then(() => {
      dispatch({ type: DELETED_POST });
      callback();
    });
  };
}

export function viewPost(id) {
  const SUB_URL = `blog/api/detail/${id}`;
  const url = `${ROOT_URL}${SUB_URL}`;
  const request = axios.get(url, tokenHeader());
  return (dispatch) => {
    dispatch({ type: FETCHING_POST });
    request.then((response) => {
      dispatch({ type: FETCHED_POST, payload: response.data });
    });
  };
}

export function editPost(fromValue, id, callback) {
  console.log(fromValue);
  const SUB_URL = `blog/api/update/${id}/`;
  const url = `${ROOT_URL}${SUB_URL}`;
  const request = axios.put(url, fromValue, tokenHeader());
  return (dispatch) => {
    dispatch({ type: EDITING_POST });
    request.then((response) => {
      dispatch({ type: EDITED_POST });
      callback();
    });
  };
}
