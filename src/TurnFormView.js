import React from 'react';

export default class TurnFormView extends React.Component {
  render() {
    const cards = this.props.game.currentPlayer().hand()
    const players = this.props.game.players().filter((player) => player != this.props.game.currentPlayer())
    return (
      <form onSubmit={(event) => this.props.onSubmitTurn(event)}>
        <select data-testid={'player'} name="player" id="player">
          {players.map( (player) => <option value={player.name()}>{ player.name() }</option> )}
        </select>
        <select data-testid={'card'} name="card" id="card">
          {cards.map((card) => <option value={card.rank()}>{card.rank()}</option>)}
        </select>
        <input data-testid="submit" id="submit" type="submit"/>
      </form>
    )
  }
}
