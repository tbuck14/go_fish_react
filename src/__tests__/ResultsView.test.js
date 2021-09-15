import { render, fireEvent } from '@testing-library/react';
import ResultsView from '../ResultsView'
import Game from '../Game'
import Player from '../Player'
import Card from '../Card'
import Deck from '../Deck'

describe('ResultsView', () => {
  it('renders a list of results', () => {
    const player1 = new Player('connor', [new Card('A', 'H'),new Card('A', 'H')])
    const player2 = new Player('trevor', [new Card('A', 'H')])
    const game = new Game([player1, player2], new Deck(), 0)
    game.playTurn('trevor', 'A')
    const wrapper = render(<ResultsView results={game.roundResults()}/>)

    expect(wrapper.getByText('connor asked trevor for a A and got (1)'))
  })
})
