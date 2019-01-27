import React,{Component} from 'react';
import {connect} from 'react-redux';
import {viewPost} from '../actions';
import Loading from '../components/loading';
import EditPostForm from '../containers/edit_form';

class EditPost extends Component{
	componentWillMount() {
		const {id} = this.props.match.params;
		this.props.viewPost(id);
	}
	render(){
		const {isFetching,isFetched} = this.props.post;
		return(
			<div className="container">
				{isFetching?<Loading/>:(isFetched?<EditPostForm data={this.props.post}/>:<Loading/>)}
			</div>
		);
	}
}
function mapStateToPorps(state){
	return{
		post:state.post
	}
}


export default connect(mapStateToPorps,{viewPost})(EditPost);
