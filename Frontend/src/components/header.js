import React,{Component} from 'react';

export default class Header extends Component{
	render(){
		return(
			<div className="contianer">
				<div className="container">
					<div className="columns">
						<div className="column col-lg-12"> 
						 	<header className="navbar">
							  <section className="navbar-section">
							    <Link to="/" className="navbar-brand mr-10">Blog</Link>
							    <Link to="/create_post" className="btn btn-warning">Create Post</Link>
							  </section>
							  <section className="navbar-section">
							  </section>
							</header>
						</div>
					</div>
				</div>
				{this.props.children}
			</div>
		);
	}
}