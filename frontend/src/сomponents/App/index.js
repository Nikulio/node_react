import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';


import { submitSign } from '../../actions/index';
import DumbComponentExample from '../../containers/example';
import './index.scss';


/***
 * Boilerplate for redux-form. Just import it to your redux-binded component.
 */

let AddSign = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component="input" type="text"/>
      </div>
      <div>
        <label htmlFor="text">Text</label>
        <Field name="text" component="textarea" type="text"/>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

AddSign = reduxForm({
  form: 'addSign',
})(AddSign);

class App extends Component {

  submit = (data) => {
    this.props.submitSign(data);
  };

  render() {
    return (
      <div>
        <AddSign onSubmit={this.submit}/>
      </div>
    );
  }
}

const mapDispatchToProps = {
  submitSign,
};
const mapStateToProps = state => {
  return {
    init: state.init,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
