import React, { Component } from 'react';
import { Header } from '../../containers';
import Routes from '../../config/routes';

class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="columns">
					<div className="col-12">
						<Header />
					</div>
					<div className="container">
						<Routes />
					</div>
				</div>
			</div>
		);
	}
}
export default App;
