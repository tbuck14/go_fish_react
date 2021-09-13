import React from 'react';
import PropTypes from 'prop-types';

class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <h2>Enter your name:</h2>
        <label>
          Name:
          <input id="name" type="text" required="required" onChange={ (e) => this.setState({name: e.target.value})} value={this.state.name}/>
        </label>
        <input id="submit" type="submit"/>
      </form>
    )
  }
}

export default LoginView
