import React, { Component } from "react";
import { connect } from "react-redux";
import {Field, reduxForm} from "redux-form"


import { initAction } from "../../actions/index";
import DumbComponentExample from "../../containers/example";
import "./index.scss";


/***
 * Boilerplate for redux-form. Just import it to your redux-binded component.
 */

let TestForm = props => {
	const { handleSubmit } = props;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="firstName">First Name</label>
				<Field name="firstName" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="lastName">Last Name</label>
				<Field name="lastName" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="email">Email</label>
				<Field name="email" component="input" type="email" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
};

TestForm = reduxForm({
	form: 'test'
})(TestForm);

class App extends Component {
	componentWillMount() {
		const initActionData = {
			text: "Hello, world!"
		};
		this.props.initAction(initActionData);
	}

	state = {
		background: "img/index.png"
	};

	render() {
		const { background } = this.state;
		const { init } = this.props;
		return (
			<div>
				<DumbComponentExample
					cls="preview"
					backgrondImage={background}
					welcome={init.text}
				/>
			</div>
		);
	}
}
const mapDispatchToProps = {
	initAction
};
const mapStateToProps = state => {
	return {
		init: state.init
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
