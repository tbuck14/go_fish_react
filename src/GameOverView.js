import React from 'react';

export default class GameOverView extends React.Component {
  constructor(props) {
    super(props)
    this._game = this.props.game
  }

  game() {
    return this._game
  }

  render() {
    return (
      <div>
        <h1>Game Over</h1>
        <h3>Winner:</h3>
        <ul>
          {this.game().winners().map( (player) => <li>{player.name()}, score: {player.score()}</li>)}
        </ul>
      </div>
    )
  }
}
