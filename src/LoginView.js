import React from 'react';
import PropTypes from 'prop-types';

export default class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.name)
  }

  render() {
    return (
      <form onSubmit={ (e) => { this.onSubmit(e) }}>
        <h2>Enter your name:</h2>
        <label>
          Name:
          <input data-testid="name" type="text" id="name" name="name" required onChange={ (e) => this.setState({name: e.target.value})} value={this.state.name}/>
        </label>
        <input data-testid="submit" type="submit"/>
      </form>
    )
  }
}

