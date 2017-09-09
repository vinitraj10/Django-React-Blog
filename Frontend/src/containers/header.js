import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom'

import Blogs from "./post_index";
import PostNew from "./post_new";
import ViewPost from './view_post';
import EditPost from './edit_post';
import Signup from './signup_form';
import Signin from './signin_form';

import requireAuth from './HOC/authenticate';

class Header extends Component{
	render(){
		return(
			<div className="contianer">
				<div className="container">
					<div className="columns">
						<div className="column col-lg-12">
						 	<header className="navbar">
								<section className="navbar-section">
								   <Link to="/" className="btn btn-link">Home</Link>
								   <Link to="/create_post" className="btn btn-link">Create Post</Link>
								</section>
								<section className="navbar-center">

								</section>
								<section className="navbar-section">
								    <Link to="/signup" className="btn btn-link">Sign Up</Link>
								    <Link to="/signin" className="btn btn-link">Sign In</Link>
								</section>
							</header>
						</div>
					</div>
				</div>
				<Route exact path="/" component={Blogs}/>
				<Route path = "/signup" component ={Signup}/>
				<Route path = "/signin" component ={Signin}/>
				<Route path = "/create_post" component= {requireAuth(PostNew)}/>
				<Route path = "/view_post/:id" component = {requireAuth(ViewPost)}/>
				<Route path = "/edit_post/:id" component = {requireAuth(EditPost)}/>
			</div>	
		);
	}
}

export default Header;