import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
//redux imports
import {createStore,applyMiddleware} from "redux";
//react-redux imports
import {Provider} from "react-redux";
import {createLogger} from "redux-logger";
import ReduxThunk from "redux-thunk";
import ReduxPromise from "redux-promise";
//file imports
import Header from './containers/header';

import reducers from "./reducers";


const createStoreWithMiddleware = applyMiddleware(ReduxThunk,ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);
const token =localStorage.getItem('token');
if(token){
	store.dispatch({type:AUTH_USER});
}

render(
	<Provider store={store}>
		<Router>
			<Header/>
		</Router>
	</Provider>
	,document.getElementById('root'));


