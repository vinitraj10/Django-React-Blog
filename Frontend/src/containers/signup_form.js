import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Field,reduxForm} from 'redux-form';
import {renderInput} from '../utils/redux-form-fields';
import {signup} from '../actions/Authentication';

class Signup extends Component{

	formSubmit(formValue){
		console.log(formValue);
		this.props.signup(formValue,()=>{
			this.props.history.push('/');
		})
	}

	render(){
		const {handleSubmit} = this.props;
		const {signupError} = this.props.auth;
		return(
			<form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
				<Field component={renderInput} label="Email" name="email" type="Email"/>
				<Field component={renderInput} label="Username" name="username" type="text"/>
				<Field component={renderInput} label="Password" name="password" type="password"/>
				<div className="form-group">
					{signupError?(<div className="form-group"><span className="label label-error">{signupError}</span></div>):""}
					<button className="btn btn-primary">Signup</button>
				</div>
			</form>
		);
	}
}

Signup = reduxForm({
	form:'SignupForm',
	fields:['email','username','password']
})(Signup);

Signup = withRouter(Signup); 

function mapStateToProps(state){
	return{
		auth:state.auth
	}
}
export default connect(mapStateToProps,{signup})(Signup);