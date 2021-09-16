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
    this.props.onSubmit(e)
  }

  render() {
    return (
      <div>
        <h1 className={'margin-bottom--sm'}>Welcome to Go Fish!</h1>
        <form onSubmit={ (e) => { this.onSubmit(e) }}>
          <h2 className={'margin-left italic'}>Enter Name:</h2>
          <div className={'center-flex'}>
            <input className={' input full-width'} data-testid="name" type="text" id="name" name="name" required onChange={ (e) => this.setState({name: e.target.value})} value={this.state.name}/>
          </div>
          <h2 className={'margin-left italic'}>Bots:</h2>
          <div className={'center-flex'}>
            <select className={'input full-width margin-bottom--sm'} data-testid={'bots'} name="bots" id="bots">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
            <button className={'input full-width button italic'} data-testid="submit-login" type="submit">Play Game</button>
          </div>
        </form>
      </div>
    )
  }
}
