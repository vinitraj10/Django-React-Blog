import axios from "axios";

export const FETCHING_BLOG = "FETCHING_BLOG";
export const FETCHED_BLOG = "FETCHED_BLOG";
export const ERROR = "ERROR";

export const CREATING_POST = "CREATING_POST";
export const CREATED_POST = "CREATE_POST";

export function getBlogs(){
	const root_url = "http://localhost:8000/";
	const sub_url = "api/blog/";
	const url = `${root_url}${sub_url}`;
	
	const request = axios.get(url);

	return (dispatch) =>{
		dispatch({type:FETCHING_BLOG});
		request.then((response)=>{
			dispatch({type:FETCHED_BLOG,payload:response});
		})
		.catch((err)=>{
			dispatch({type:ERROR,payload:err});
		})
	};

}

export function createPost(fromValue){
	const root_url = "http://localhost:8000/";
	const sub_url = "api/blog/create";
	const url = `${root_url}${sub_url}`;
	//console.log(props);

	const request = axios.post(url,fromValue);

	return {
		type:CREATED_POST,
		payload:request
	}
	/*return (dispatch) => {
		dispatch({type:CREATING_POST});
		request.then((response)=>{
			dispatch({type:CREATED_POST,payload:response.data});
		});
	}*/

}