import React from 'react';
import './css/login.css';

const Signin = () => (
	<div className="container">
		<div className="columns content">
			<div className="column col-6 col-sm-12 col-xs-12">
					<div className="panel">
							<div className="panel-header">
								<div className="panel-title"><h3 className="text-center">Signin</h3></div>
							</div>
							<div className="panel-body">
								<div className="form-group">
									<label className="form-label" htmlFor="input-example-1">email</label>
									<input
											className="form-input"
											type="text"
											id="input-example-1"
											placeholder="email"
									/>
								</div>
								<div className="form-group">
									<label className="form-label" htmlFor="input-example-1">password</label>
									<input
										className="form-input"
										type="text"
										id="input-example-1"
										placeholder="password"
									/>
								</div>
								<div className="form-group">
									<button className="btn btn-default btn-lg">Login</button>
								</div>
							</div>
						<div className="panel-footer">
							<div className="divider text-center" data-content="OR" />
							<div className="column col-12">
								<button className="btn-si btn-github">Sign in with GitHub</button>
							</div>
						</div>
					</div>
			</div>
		</div>
	</div>
);


export default Signin;
