import React,{Component} from 'react';
import {connect} from 'react-redux';
import {viewPost} from '../actions';

import Loading from "../components/loading";
import PostDetail from "../containers/postdetail";

class ViewPost extends Component{
	componentWillMount() {
		const {id} = this.props.match.params;
		this.props.viewPost(id);
	}
	render(){
		const {isFetching,isFetched} = this.props.post;
		return(
			<div className="container">
				{isFetching?<Loading/>:(isFetched?<PostDetail data={this.props}/>:<Loading/>)}
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		post:state.post
	}
}

export default connect(mapStateToProps,{viewPost})(ViewPost);