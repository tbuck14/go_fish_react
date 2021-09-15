import React from 'react';
import TurnFormView from './TurnFormView'
import PlayerView from './PlayerView'
import ResultsView from './ResultsView'
export default class GameView extends React.Component {
  constructor(props) {
    super(props)
    this._game = this.props.game
  }

  game() {
    return this._game
  }

  playRound(event) {
    event.preventDefault()
    const player = event.target.player.value
    const card = event.target.card.value
    this.game().playTurn(player, card)
    this.props.onSubmit(this.game())
  }

  render() {
    return (
      <div>
        <h1>Game Page</h1>
        <h3>Players:</h3>
        <ul>
          {this.game().players().map((player) => <PlayerView player={player}/>)}
        </ul>
        <TurnFormView game={this.game()} onSubmitTurn={this.playRound.bind(this)}/>
        <h3>Game Log:</h3>
        <ResultsView results={this.game().roundResults()}/>
      </div>
    )
  }
}
