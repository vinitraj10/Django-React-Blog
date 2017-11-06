import React,{Component} from 'react';
import {Link,Route,withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Signup from './signup_form';
import Signin from './signin_form';
import Shop from './shop';
import ViewProduct from './shop/viewproduct';
import requireAuth from './HOC/authenticate';
import Myorders from './myorders';
import Ratings from './rating';
import SubmitRating from './rating/submitrating';
import EditRating from './rating/editrating';
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
								   {authenticated?(
								   	<div>
								   		<Link to="/myorders" className="btn btn-link">My Orders</Link>
								   		<Link to="/myratings" className="btn btn-link">My Ratings</Link>
								   	</div>
								   	):""}
								</section>
								{this.renderAuthMode(authenticated)}
							</header>
						</div>
					</div>
				</div>
				<Route exact path = "/" component = {Shop}/>
				<Route path = "/signup" component ={Signup}/>
				<Route path = "/signin" component ={Signin}/>
				<Route path = "/myorders" component = {requireAuth(Myorders)}/>
				<Route path = "/myratings" component = {requireAuth(Ratings)}/>
				<Route path = "/view_product/:id" component= {ViewProduct}/>
				<Route path = "/submit/rating/:id" component = {requireAuth(SubmitRating)}/>
				<Route path = "/edit/rating/:id" component = {requireAuth(EditRating)}/>
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

