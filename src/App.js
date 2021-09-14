import React from 'react';
import './App.css';
import LoginView from './LoginView.js';
import GameView from './GameView.js';
import Game from './Game.js';
import Player from './Player.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  startGame(name) {
    this.setState(() => {
      const player = new Player(name)
      const game = new Game([player])
      return { game }
    })
  }

  render() {
    if(this.state.game){
      return <GameView game={this.state.game}/>
    } else {
      return <LoginView onSubmit={this.startGame.bind(this)}/>
    }
  }
}
