import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import ReduxThunk from "redux-thunk"

export const history = createBrowserHistory();

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers";
import App from "./сomponents/App/index";
import "reset-css/reset.css";

const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, reduxDevTools, applyMiddleware(ReduxThunk));

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
);
