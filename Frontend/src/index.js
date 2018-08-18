import 'spectre.css/dist/spectre.min.css';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux-store';
import App from './components/app';

const rootDiv = document.getElementById('root');
render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	rootDiv
);
