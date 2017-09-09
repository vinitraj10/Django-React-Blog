import axios from "axios";

export const FETCHING_BLOGS = "FETCHING_BLOGS";
export const FETCHED_BLOGS = "FETCHED_BLOGS";
export const ERROR = "ERROR";

export const CREATING_POST = "CREATING_POST";
export const CREATED_POST = "CREATE_POST";

export const POST_DELETING = 'POST_DELETING';

export const FETCHING_POST = 'FETCHING_POST';
export const FETCHED_POST = 'FETCHED_POST';

const root_url = "http://localhost:8000/";

export function getBlogs(){
	const sub_url = "blog/api/";
	const url = `${root_url}${sub_url}`;
	
	const request = axios.get(url);

	return (dispatch) =>{
		dispatch({type:FETCHING_BLOGS});
		request.then((response)=>{
			dispatch({type:FETCHED_BLOGS,payload:response});
		})
		.catch((err)=>{
			dispatch({type:ERROR,payload:err});
		})
	};

}

export function createPost(fromValue){
	const sub_url = "blog/api/create/";
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

export function deletePost(id){
	const sub_url = `blog/api/delete/${id}`;
	const url = `${root_url}${sub_url}`;
	const blog_url = `${root_url}blog/api`;
	const request = axios.delete(url);
	return (dispatch) =>{
		dispatch({type:POST_DELETING});
		request.then(()=>{
			console.log("Inside blogs");
			axios.get(blog_url)
			.then((response)=>{
				dispatch({type:FETCHED_BLOG,payload:response.data});
			})
		});
	}
}

export function viewPost(id){
	const sub_url = `blog/api/detail/${id}`;
	const url = `${root_url}${sub_url}`;
	return (dispatch) =>{
		dispatch({type:FETCHING_POST});
		axios.get(url)
		.then((response)=>{
			dispatch({type:FETCHED_POST,payload:response.data});
		});
	}
}