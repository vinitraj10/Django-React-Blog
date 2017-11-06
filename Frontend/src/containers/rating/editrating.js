import React ,{Component} from 'react';
import {Field,reduxForm} from "redux-form";
import {connect} from 'react-redux';
import {editRating} from '../../actions';
import {withRouter} from 'react-router-dom';

class EditRating extends Component {
	onSubmit(formValue){
		const {id} = this.props.match.params
		this.props.editRating(id,formValue,()=>{
			this.props.history.push('/myratings')
		})
	}
	render(){
		const {fields:{value},handleSubmit} = this.props;
		console.log(this.props);
		return(
			<div className="columns">
				<div className="column col-4"></div>
				<div className="column col-4">	
					<form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
						<div className="panel">
							<div className="panel-header">
							    <div className="panel-title">Add Rating</div>
							</div>
							<div className="panel-body">
							 	<label className="form-label">Select Rating Value</label>
								<Field name="value" component="select">
						           	<option></option>
						            <option value="1">1</option>
						            <option value="2">2</option>
						            <option value="3">3</option>
						            <option value="4">4</option>
						            <option value="5">5</option>
						          </Field>
							</div>
						
						 	<div className="panel-footer">
						 		<button className="btn btn-primary" type="submit">Post</button>
						 	</div>
						 </div>
					</form>
				</div>
			</div>
		);
	}
}

EditRating = withRouter(EditRating);

export default connect(null, {editRating})(reduxForm({
	form:'PostForm',
	fields:['value'],
})(EditRating));