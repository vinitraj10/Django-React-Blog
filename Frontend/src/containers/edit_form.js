import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {renderInput} from '../utils/redux-form-fields';
import {editForm} from '../actions';

class EditForm extends Component{
	componentDidMount() {
		this.props.initialize({
			title:this.props.data.data.title,
			content:this.props.data.data.content
		});
	}
	render(){
		const {data} = this.props.data;
		console.log(this.props);
		return(
			<form>
				<Field component={renderInput}
					divClassName="form-group"
					label="Title"
					inputClassName = "form-input input-lg"
					type = "text"
					name = "title"	
				/>
				<Field component={renderInput}
				label="Content"
				divClassName="form-group"
				inputClassName = "form-input input-lg"
				type = "text"
				name = "content"
			/>
				<div className="form-group">
				 	<button className="btn btn-primary" type="submit">Save</button>
				 	<Link to={`/view_post/${data.id}`} className="btn btn-default"> Cancel</Link>
				 </div>
			</form>
		);
	}
}

EditForm = reduxForm({
	form:'EditForm',
	fields:['title','content'],
})(EditForm);


export default connect(null,{editForm})(EditForm);