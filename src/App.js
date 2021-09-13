import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginView from './LoginView.js';
import GameView from './GameView.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  startGame() {
    this.setState({game: 'new game'})
  }

  render(){
    if(this.state.game){
      return <GameView game={this.state.game}/>
    } else {
      return <LoginView onSubmit={this.startGame.bind(this)}/>
    }
  }
}

export default App;
