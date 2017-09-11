import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deletePost} from '../actions';
import {changeMode} from '../actions';
import moment from 'moment';

class PostDetail extends Component{
	delete(){
		const {data} = this.props.data.post;
		this.props.deletePost(data.id,()=>{
			this.props.data.history.push("/");
		});
	}
	renderEditButton(){
		const {data} = this.props.data.post;
		const owner = data.author;
		const requestUser = localStorage.getItem('username');
		if(owner==requestUser){
			return (
				<Link className="btn" to={`/edit_post/${data.id}`}>Edit</Link>
			)
		} 
	}
	renderDeleteButton(){
		const {data} = this.props.data.post;
		const owner = data.author;
		const requestUser = localStorage.getItem('username');
		if(owner==requestUser){
			return (
				<button className="btn" onClick={this.delete.bind(this)}>Delete</button>
			)
		} 
	}
	render(){
		const {data} = this.props.data.post;
		console.log(data);
		const time = moment(data.published).format("MMM Do YY") 
		return(
			<div className="panel">
				<div className="panel-header">
					<div className="panel-subtitle float-right">Posted:-{time}</div>
					<div className="panel-title h5 mt-10">{data.title}</div>
					<div className="panel-subtitle">By:-{data.author}</div>
				  	</div>
				<div className="panel-body">
				   <p>{data.content}</p>
				</div>
				<div className="panel-footer">
				  	<div className="btn-group btn-group-block">
                   		{this.renderEditButton()}
                   		{this.renderDeleteButton()}
                    <Link className="btn " to="/">Back</Link>
                  </div>
				</div>
			</div>
		);
	}
}

export default connect(null,{deletePost,changeMode})(PostDetail);
