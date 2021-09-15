import React from 'react';

export default class PlayerView extends React.Component {
  render() {
    return (
      <li data-testid={this.props.player.name()} key={this.props.player.name()} >
        {this.props.player.name()}(score: {this.props.player.score()})(cards: {this.props.player.cardsLeft()})
      </li>
    )
  }
}
