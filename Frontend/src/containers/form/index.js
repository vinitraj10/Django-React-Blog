import React, { Component } from 'react';
import './css/form.css';

class Form extends Component {
	render() {
		return (
			<div className="panel">
				<div className="panel-header">
					<div className="panel-title">
						<h2 className="text-center">
							Estimate Delivery
						</h2>
					</div>
				</div>
				<div className="panel-body">
					<div className="form-group">
						<label className="form-label" htmlFor="input-example-1">Source</label>
						<input 
							className="form-input" 
							type="text"
							placeholder="Source Pin-Code" 
						/>
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="input-example-2">Destination</label>
						<input 
							className="form-input" 
							type="text"
							placeholder="Destination Pin-Code" 
						/>
					</div>
					<div className="form-group">
						<label className="form-label" htmlFor="input-example-3">Weight</label>
						<input 
							className="form-input" 
							type="text"
							placeholder="Weight" 
						/>
					</div>
				</div>
				<div className="panel-footer">
					<input 
						type="submit"
						className="btn-estimate" 
						value="Estimate"
					/>
				</div>
			</div>
		);
	}
}
export default Form;
