import React,{Component,PropTypes} from "react";
import {Field,reduxForm} from "redux-form";
import {connect} from "react-redux";
import {createPost} from "../actions/index";
import {Link} from "react-router-dom";

class PostNew extends Component{
	static contextTypes = {
		router : PropTypes.object,
	};

	onSubmit(formValue){
		this.props.createPost(formValue)
		.then(()=>{
			this.context.router.history.push("/");
		});
	}

	render(){
		const {fields:{title,content},handleSubmit} = this.props;
		return(
			<div className="columns">
				<div className="column col-4"></div>
				<div className="column col-4">	
					<form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
						<div className="form-group">
							<label className="form-label">Title</label>
							<Field component="input"  name="title" type="text" className="form-input" placeholder="Enter the title of the Post"/>
						</div>
						 <div className="form-group">
						    <label className="form-label">Message</label>
						    <Field component="textarea" name="content" className="form-input" id="input-example-3" placeholder="Textarea" rows="3"/>
						 </div>
						 <div className="form-group">
						 	<button className="btn btn-primary" type="submit" id="vini">default button </button>
						 	<Link to="/" className="btn btn-default"> Cancel</Link>
						 </div>
					</form>
				</div>
			</div>
		);
	}
}

//redux form almost similar to connect 1st parameter is form object 2nd is mapStateToProps 3rd is mapDispatchToProps.
//we will use shorthand of mapDispatchToProps ,We could have written mapDispatchToProps function and then use bindActionCreators to map dispatch to props .but instead of doing all that we just pass the function as argument in reduxForm. 
function mapStateToProps(state){
	return {
		newpost:state.newpost,
	}
}

export default connect(mapStateToProps, {createPost})(reduxForm({
	form:'PostForm',
	fields:['title','content'],
})(PostNew));