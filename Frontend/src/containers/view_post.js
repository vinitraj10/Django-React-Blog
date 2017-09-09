import React,{Component} from 'react';
import {connect} from 'react-redux';

class ViewPost extends Component{
	componentDidMount() {
		const {id} = this.props.match.params;
		console.log(id);
	}
	render(){
		return(
			<h1>View Post</h1>
		);
	}
}

export default ViewPost;