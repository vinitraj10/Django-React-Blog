import React from 'react';

export const renderInput = ({input,label,type,placeholder,meta:{touched,error},disabled}) =>{
	return(
		<div className="form-group">
		  <label className="form-label">{label}</label>
		  <input className="form-input input-lg" type={type} placeholder={placeholder} {...input}/>
		</div>
	);
};