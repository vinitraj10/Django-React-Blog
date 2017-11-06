import axios from "axios";

export const FETCHING_PRODUCTS = "FETCHING_PRODUCTS";
export const FETCHED_PRODUCTS = "FETCHED_PRODUCTS";

export const FETCHING_PRODUCT = 'FETCHING_PRODUCT';
export const FETCHED_PRODUCT = 'FETCHED_PRODUCT';

export const FETCHED_RATING = 'FETCHED_RATING';

export const FETCHING_MYORDER = 'FETCHING_MYORDER';
export const FETCHED_MYORDER = 'FETCHED_MYORDER';

export const FETCHING_RATINGS = 'FETCHING_RATINGS';
export const FETCHED_RATINGS = 'FETCHED_RATINGS';

import {tokenHeader} from '../utils/headers';

const root_url = "http://localhost:8000/shop/";

export function getProducts(){
	const url = `${root_url}`;
	const request = axios.get(url,tokenHeader());

	return (dispatch) =>{
		dispatch({type:FETCHING_PRODUCTS});
		request.then((response)=>{
			dispatch({type:FETCHED_PRODUCTS,payload:response.data});
		})
		.catch((err)=>{
			dispatch({type:ERROR,payload:err});
		})
	};

}

export function viewProduct(id){
	const sub_url = `detail/${id}/product/`;
	const url = `${root_url}${sub_url}`;
	const request = axios.get(url,tokenHeader());
	return (dispatch) =>{
		dispatch({type:FETCHING_PRODUCT});
		request.then((response)=>{
			dispatch({type:FETCHED_PRODUCT,payload:response.data});
		});
	}
}


export function buyProduct(id,callback){
	const sub_url = `buy/${id}/product/`;
	const url = `${root_url}${sub_url}`;
	const request = axios.post(url,null,tokenHeader());
	request.then(()=>{
		callback();
	})
	return {
		type:"Product_Buy"
	};

}

export function getAvgRating(id){
	const url = `${root_url}getavgrating/${id}/product/`;
	return (dispatch) => {
		axios.get(url,tokenHeader())
		.then((response)=>{
			dispatch({type:FETCHED_RATING,payload:response.data.value})
		})
	}
}

export function getMyOrders(){
	const url = `${root_url}myorders/`;
	return (dispatch) => {
		dispatch({type:FETCHING_MYORDER});
		axios.get(url,tokenHeader())
		.then((response)=>{	
			dispatch({type:FETCHED_MYORDER,payload:response.data})
		})
	}
}

export function postRating(id,value,callback){
	const url = `${root_url}rate/${id}/product/`;
	axios.post(url,value,tokenHeader())
	.then((response)=>{
		callback();
	})

	return {
		type:"postrating"
	}
}

export function editRating(id,value,callback){
	const url = `${root_url}editmyrating/${id}/product/`;
	axios.post(url,value,tokenHeader())
	.then((response)=>{
		callback();
	})

	return {
		type: "editmyrating"
	}
}

export function getAllRatings(id){
	const url = `${root_url}myrating/`;
	return (dispatch)=>{
		dispatch({type:FETCHING_RATINGS})
		axios.get(url,tokenHeader())
		.then((response)=>{
			dispatch({type:FETCHED_RATINGS,payload:response.data})
		})
	}
}