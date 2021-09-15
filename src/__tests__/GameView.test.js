import { render, fireEvent } from '@testing-library/react';
import GameView from '../GameView';
import Game from '../Game'
import Player from '../Player'

describe('GameView', () => {
  it('renders the game page', () => {

    const player = new Player('trevor')
    const game = new Game([player])
    const wrapper = render(<GameView game={game}/>);

    expect(wrapper.getByText('Game Page'));
    expect(wrapper.getByText('Players:'));
    expect(wrapper.getByText('Game Log:'));
  })

  describe('#game', () => {
    it('returns the game object', () => {
      const player = new Player('trevor')
      const game = new Game([player])
      const view = new GameView({game: game})

      expect(view.game()).toEqual(game)
    })
  })

  describe('#playRound', () => {
    it('calls onSubmit properly', () => {
      const func = jest.fn()
      const player = new Player('trevor')
      const game = new Game([player])

      const view = new GameView({game: game, onSubmit: func})

      view.playRound('bot1', 'A')
      expect(func).toBeCalled
    })
  })
})
