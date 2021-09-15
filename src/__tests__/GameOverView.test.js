import { render, fireEvent } from '@testing-library/react';
import GameOverView from '../GameOverView';
import Game from '../Game'
import Player from '../Player'

describe('GameOverView', () => {
  it('renders the game over page', () => {

    const player = new Player('trevor')
    const game = new Game([player])
    const wrapper = render(<GameOverView game={game}/>);

    expect(wrapper.getByText('Game Over'));
  })

  it('renders winners of the game', () => {
    const player1 = new Player('trevor')
    Array.from(new Array(5)).forEach(() => player1.increaseScore())
    const player2 = new Player('connor')
    const game = new Game([player1, player2])
    const wrapper = render(<GameOverView game={game}/>);

    expect(wrapper.getByText(/trevor, score: 5/));
  })

  it('renders a list of winners if there is multiple', () => {
    const player1 = new Player('trevor')
    Array.from(new Array(6)).forEach(() => player1.increaseScore())
    const player2 = new Player('connor')
    Array.from(new Array(6)).forEach(() => player2.increaseScore())
    const game = new Game([player1, player2])
    const wrapper = render(<GameOverView game={game}/>);

    expect(wrapper.getByText(/trevor, score: 6/));
    expect(wrapper.getByText(/connor, score: 6/));
  })

  describe('#game', () => {
    it('returns the game object', () => {
      const player = new Player('trevor')
      const game = new Game([player])
      const view = new GameOverView({game: game})

      expect(view.game()).toEqual(game)
    })
  })
})
