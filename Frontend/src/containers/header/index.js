import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';
import Logo from './img/share-sm.png';

class Header extends Component {
	render() {
		return (
			<header className="navbar">
				<section className="navbar-section">
					<img alt="logo" src={Logo} className="logo" />
					<Link to="/" className="navbar-brand"> Dev-Circle</Link>
				</section>
				<section className="navbar-center">
					{/*<div className="input-group input-inline">
						<input className="form-input" type="text" placeholder="search" />
						<button className="btn btn-primary input-group-btn">Search</button>
					</div>*/}
				</section>
				<section className="navbar-section">
					<Link to="/signin" className="btn btn-link link">Signin</Link>
					<Link to="/signup" className="btn btn-link link">Signup</Link>
				</section>
			</header>
		);
	}
}

export default Header;
