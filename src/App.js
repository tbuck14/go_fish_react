import React from 'react';
import './App.css';
import LoginView from './LoginView.js';
import GameView from './GameView.js';
import GameOverView from './GameOverView.js';
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
      game.start()
      return { game }
    })
  }

  updateGame(newgame) {
    this.setState({game: newgame})
  }

  render() {
    if(this.state.game){
      if(this.state.game.over()){
        return <GameOverView game={this.state.game} playAgain={this.updateGame.bind(this)}/>
      } else {
        return <GameView onSubmit={this.updateGame.bind(this)} game={this.state.game}/>
      }
    } else {
      return <LoginView onSubmit={this.startGame.bind(this)}/>
    }
  }
}
