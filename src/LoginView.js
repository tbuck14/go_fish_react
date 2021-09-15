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
      <div>
        <h1 className={'margin-bottom--sm'}>Welcome to Go Fish!</h1>
        <form onSubmit={ (e) => { this.onSubmit(e) }}>
          <h2 className={'margin-left italic'}>Enter Name:</h2>
          <div className={'center-flex'}>
            <input className={'margin-bottom--sm input full-width'} data-testid="name" type="text" id="name" name="name" required onChange={ (e) => this.setState({name: e.target.value})} value={this.state.name}/>
            <button className={'input full-width button italic'} data-testid="submit" type="submit">Play Game</button>
          </div>
        </form>
      </div>
    )
  }
}
