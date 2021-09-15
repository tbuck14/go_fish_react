import { render } from '@testing-library/react';
import PlayerView from '../PlayerView'
import Player from '../Player'
import Card from '../Card'

describe('PlayerView', () => {
  it('renders a list element for a specific player', () => {
    const player = new Player('trevor')
    const wrapper = render(<PlayerView player={player}/>);

    expect(wrapper.getByText('trevor(score: 0)(cards: 0)'));
  })

  it('also renders their specific score and cards left', () => {
    const player = new Player('trevor', [new Card('A', 'H'),new Card('J', 'H'),new Card('Q', 'H')])
    Array.from(new Array(7)).forEach(() => player.increaseScore())

    const wrapper = render(<PlayerView player={player}/>);

    expect(wrapper.getByText('trevor(score: 7)(cards: 3)'));
  })
})
