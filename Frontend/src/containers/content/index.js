import React, { Component } from 'react';
//import Form from '../form';
import './css/content.css';

class Content extends Component {
	render() {
		return (
			<div className="columns">
				<div
					className="column col-8 col-md-7 col-sm-12 col-xs-12 content"
				>
					<div className="body">
						<h1 className="text-center">
								Banner
						</h1>
					</div>
				</div>
				<div
					className="column col-4 col-md-5 col-sm-12 col-xs-12 content"
				>
					{/*<Form />*/}
				</div>
			</div>
		);
	}
}

export default Content;
