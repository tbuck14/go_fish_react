import React from 'react';
import TurnFormView from './TurnFormView'
import PlayerView from './PlayerView'
import ResultsView from './ResultsView'
import CardView from './CardView'

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
        <h3 className={'italic'}>Players:</h3>
        <ul>
          {this.game().players().map((player) => <PlayerView  key={player.name()} player={player}/>)}
        </ul>
        <h3 className={'italic'}>Hand:</h3>
        <div className={'hand'}>
          {this.game().currentPlayer().hand().map((card) => <CardView rank={card.rank()} suit={card.suit()}/>)}
        </div>
        <h3 className={'italic'}>Make Selection:</h3>
        <TurnFormView game={this.game()} onSubmitTurn={this.playRound.bind(this)}/>
        <h3 className={'italic'}>Game Log:</h3>
        <div className={'game-log'}>
          <ResultsView results={this.game().roundResults()}/>
        </div>
      </div>
    )
  }
}
