import React from 'react';

export default class GameView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      game: this.props.game
    }
  }

  handleClick() {}

  render() {
    return (
      <div>
        <h1>Game Page</h1>
        <h3>Players:</h3>
        <ul>
          {this.state.game.players().map((player) => <li key={player.name()} >{player.name()} || cards: {0} || score: {0}</li>)}
        </ul>
        <button onClick={ (e) => this.handleClick()}></button>
      </div>
    )
  }
}
