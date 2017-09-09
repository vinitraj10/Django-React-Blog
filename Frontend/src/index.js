import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
//redux imports
import {createStore,applyMiddleware} from "redux";
//react-redux imports
import {Provider} from "react-redux";
import {createLogger} from "redux-logger";
import ReduxThunk from "redux-thunk";
import ReduxPromise from "redux-promise";
//file imports
import Main from "./components/main";
import PostNew from "./containers/post_new";
import ViewPost from './containers/view_post';
import EditPost from './containers/edit_post';
import Signup from './containers/signup_form';
import Signin from './containers/signin_form';
import reducers from "./reducers";

const store = applyMiddleware(ReduxThunk,ReduxPromise)(createStore);

render(
	<Provider store={store(reducers)}>
		<Router>
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
				<Route exact path="/" component={Main}/>
				<Route path="/signup" component ={Signup}/>
				<Route path="/signin" component ={Signin}/>
				<Route path="/create_post" component= {PostNew} />
				<Route path="/view_post/:id" component = {ViewPost}/>
				<Route path="/edit_post/:id" component = {EditPost}/>
			</div>	
		</Router>
	</Provider>
	,document.getElementById('root'));


