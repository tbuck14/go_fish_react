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
  })

  it('displays the players in the game', () => {
    const player = new Player('trevor')
    const game = new Game([player])
    const wrapper = render(<GameView game={game}/>);

    expect(wrapper.getByText('Players:'));
    expect(wrapper.getByText('trevor'));
    expect(wrapper.getByText('bot1'));
    expect(wrapper.getByText('bot2'));
    expect(wrapper.getByText('bot3'));
  })
})
