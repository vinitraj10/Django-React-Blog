import React,{Component} from "react";
import {Link} from 'react-router-dom';

class Posts extends Component{
	renderPost(post){
		return(
			<div className="column col-6"  key={post.id}>
				<div className="card">
				  <div className="card-header">
				    <h4 className="card-subtitle">{post.title}</h4>
				  </div>
				  <div className="card-body">
				    {post.content}
				  </div>
				  <div className="card-footer">
				    <Link className="btn btn-primary" to={`/view_post/${post.id}`}>View</Link>
				  </div>
				</div>
			</div>
		);
	}
	render(){
		const posts = this.props.posts;
		//console.log(posts)
		return (
			<div className="columns">
				{posts.map(this.renderPost.bind(this))}
			</div>
		)
	}
}

export default Posts;