import React from 'react';

class GameView extends React.Component {

  constructor(props) {
    super(props)

    this._game = this.props.game
  }

  render() {
    return (
      <h1>Game Page</h1>
    )
  }
}

export default GameView
