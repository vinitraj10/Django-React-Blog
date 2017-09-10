import React,{Component} from 'react';
import {Link,Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Blogs from "./post_index";
import PostNew from "./post_new";
import ViewPost from './view_post';
import EditPost from './edit_post';
import Signup from './signup_form';
import Signin from './signin_form';

import requireAuth from './HOC/authenticate';

import {signout} from '../actions/Authentication';

class Header extends Component{
	logoutUser(){
		this.props.signout(()=>{
			this.props.history.push('/signin');
		})
	}
	renderAuthMode(authenticated){
		if(authenticated){
			return(
				<section className="navbar-section">
				   <a className="btn btn-link" onClick={this.logoutUser.bind(this)}>Logout</a>
				</section>
			);
		}
		return(
			<section className="navbar-section">
			    <Link to="/signup" className="btn btn-link">Sign Up</Link>
			    <Link to="/signin" className="btn btn-link">Sign In</Link>
			</section>
		);

	}
	render(){
		const {authenticated} = this.props;
		return(
			<div className="contianer">
				<div className="container">
					<div className="columns">
						<div className="column col-lg-12">
						 	<header className="navbar">
								<section className="navbar-section">
								   <Link to="/" className="btn btn-link">Home</Link>
								   {authenticated?(<Link to="/create_post" className="btn btn-link">Create Post</Link>):""}
								</section>
								{this.renderAuthMode(authenticated)}
							</header>
						</div>
					</div>
				</div>
				<Route exact path="/" component={requireAuth(Blogs)}/>
				<Route path = "/signup" component ={Signup}/>
				<Route path = "/signin" component ={Signin}/>
				<Route path = "/create_post" component= {requireAuth(PostNew)}/>
				<Route path = "/view_post/:id" component = {requireAuth(ViewPost)}/>
				<Route path = "/edit_post/:id" component = {requireAuth(EditPost)}/>
			</div>	
		);
	}
}

function mapStateToProps(state){
	return{
		authenticated:state.auth.authenticated
	}
}

export default withRouter(connect(mapStateToProps,{signout})(Header));

