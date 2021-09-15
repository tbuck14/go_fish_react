import { render, fireEvent } from '@testing-library/react';
import TurnFormView from '../TurnFormView'
import Game from '../Game'
import Player from '../Player'
import Card from '../Card'
import Deck from '../Deck'

describe('TurnFormView', () => {
  it('allows you to select a player', () => {
    const player1 = new Player('connor', [new Card('K', 'H'),new Card('A', 'H')])
    const game = new Game([player1])
    const wrapper = render(<TurnFormView game={game} onSubmitTurn={() => {}}/>)

    const playerSelect = wrapper.getByTestId('player')

    playerSelect.value = 'bot1'
  })

  it('allows you to select a card', () => {
    const player1 = new Player('connor', [new Card('K', 'H'),new Card('A', 'H')])
    const game = new Game([player1])
    const wrapper = render(<TurnFormView game={game} onSubmitTurn={() => {}}/>)

    const cardSelect = wrapper.getByTestId('card')

    cardSelect.value = 'A'
  })

  it('submitting calls the passed in function properly', () => {
    const func = jest.fn()
    const player1 = new Player('connor', [new Card('K', 'H'),new Card('A', 'H')])
    const game = new Game([player1])
    const wrapper = render(<TurnFormView game={game} onSubmitTurn={func}/>)

    const submit = wrapper.getByTestId('submit')
    submit.click()

    expect(func).toBeCalled
  })

})
