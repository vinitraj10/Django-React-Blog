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

const root_url = 'https://djminapi.herokuapp.com/';

export function getBlogs() {
  const sub_url = 'blog/api/';
  const url = `${root_url}${sub_url}`;

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
  const sub_url = 'blog/api/create/';
  const url = `${root_url}${sub_url}`;
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
  const sub_url = `blog/api/delete/${id}`;
  const url = `${root_url}${sub_url}`;
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
  const sub_url = `blog/api/detail/${id}`;
  const url = `${root_url}${sub_url}`;
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
  const sub_url = `blog/api/update/${id}/`;
  const url = `${root_url}${sub_url}`;
  const request = axios.put(url, fromValue, tokenHeader());
  return (dispatch) => {
    dispatch({ type: EDITING_POST });
    request.then((response) => {
      dispatch({ type: EDITED_POST });
      callback();
    });
  };
}
