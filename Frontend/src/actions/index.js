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

const rootUrl = 'http://localhost:8000/';

export function getBlogs() {
	const subUrl = 'blog/api/';
	const url = `${rootUrl}${subUrl}`;

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
	const subUrl = 'blog/api/create/';
	const url = `${rootUrl}${subUrl}`;
	//console.log(props);

	const request = axios
		.post(url, fromValue, tokenHeader())
		.then(() => callback());

	return {
		type: CREATED_POST,
		payload: request
	};
}

export function deletePost(id, callback) {
	const subUrl = `blog/api/delete/${id}`;
	const url = `${rootUrl}${subUrl}`;
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
	const subUrl = `blog/api/detail/${id}`;
	const url = `${rootUrl}${subUrl}`;
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
	const subUrl = `blog/api/update/${id}/`;
	const url = `${rootUrl}${subUrl}`;
	const request = axios.put(url, fromValue, tokenHeader());
	return (dispatch) => {
		dispatch({ type: EDITING_POST });
		request.then(() => { //response not used in then callback
			dispatch({ type: EDITED_POST });
			callback();
		});
	};
}
