import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deletePost} from '../actions';
import {changeMode} from '../actions';

class PostDetail extends Component{
	delete(){
		const {data} = this.props.data.post;
		this.props.deletePost(data.id,()=>{
			this.props.data.history.push("/");
		});
	}
	render(){

		const {data} = this.props.data.post;
		return(
			<div className="panel">
				<div className="panel-header">
					<div className="panel-title">{data.title}</div>
				  	</div>
				<div className="panel-body">
				   <p>{data.content}</p>
				</div>
				<div className="panel-footer">
				  	<div className="btn-group btn-group-block">
                    <Link className="btn btn-primary" to={`/edit_post/${data.id}`}>Edit</Link>
                    <button className="btn" onClick={this.delete.bind(this)}>Delete</button>
                    <Link className="btn" to="/">Back</Link>
                  </div>
				</div>
			</div>
		);
	}
}

export default connect(null,{deletePost,changeMode})(PostDetail);