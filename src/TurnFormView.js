import React from 'react';

export default class TurnFormView extends React.Component {
  render() {
    const cards = this.props.game.currentPlayer().hand()
    const players = this.props.game.players().filter((player) => player != this.props.game.currentPlayer())
    return (
      <form onSubmit={(event) => this.props.onSubmitTurn(event)}>
        <select className={'input margin-right--sm'} data-testid={'player'} name="player" id="player">
          {players.map( (player) => <option key={player.name()} value={player.name()}>{ player.name() }</option> )}
        </select>
        <select className={'input margin-right--sm'} data-testid={'card'} name="card" id="card">
          {cards.map((card) => <option key={`${card.rank()}${card.suit()}`} value={card.rank()}>{card.rank()}</option>)}
        </select>
        <button className={'input margin-right--sm italic'} data-testid="submit" id="submit" type="submit">Ask</button>
      </form>
    )
  }
}
