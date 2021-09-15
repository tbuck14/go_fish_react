import React from 'react';

export default class PlayerView extends React.Component {
  render() {
    return (
      <li className={'font-lg bold'} data-testid={this.props.player.name()} key={this.props.player.name()} >
        {this.props.player.name()} | Score: {this.props.player.score()} | Cards: {this.props.player.cardsLeft()}
      </li>
    )
  }
}
