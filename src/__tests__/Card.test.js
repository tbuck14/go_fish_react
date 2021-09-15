import Card from '../Card'

describe('Card', () => {
  it('has a rank and suit', () => {
    const card = new Card('4', 'C')
    expect(card.rank()).toEqual('4')
    expect(card.suit()).toEqual('C')
  })

  it('returns a numeric value representing the rank of the card', () => {
    const card1 = new Card('4', 'C')
    const card2 = new Card('7', 'J')
    const card3 = new Card('Q', 'C')
    expect(card1.value()).toEqual(2)
    expect(card2.value()).toEqual(5)
    expect(card3.value()).toEqual(10)
  })
})
