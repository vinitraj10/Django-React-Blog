import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class PostDetail extends Component{
	render(){
		const {data} = this.props;
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
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn">Delete</button>
                    <Link className="btn" to="/">Back</Link>
                  </div>
				</div>
			</div>
		);
	}
}

export default PostDetail;