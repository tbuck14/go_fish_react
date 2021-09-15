import React from 'react';

export default class CardView extends React.Component {
  render() {
    return (
      <img className={'playingcard'} src={`/images/${this.props.suit.toLowerCase()}${this.props.rank.toLowerCase()}.png`} />
    )
  }
}
