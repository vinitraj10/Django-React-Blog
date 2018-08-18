import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Content, Signup, Signin } from '../containers';
import './routes.css';

class Routes extends Component {
	render() {
		const { location } = this.props;
		return (
			<Switch location={location}>
				<Route exact path="/" component={Content} />
				<Route path="/signup" component={Signup} />
				<Route path="/signin" component={Signin} />
			</Switch>
		);
	}
}
export default withRouter(Routes);
