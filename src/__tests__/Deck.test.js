import Card from '../Card'
import Deck from '../Deck'

describe('Deck', () => {
  it('has an array of card objects', () => {
    const cards = [new Card('A', 'S'),new Card('6', 'D'),new Card('2', 'C'),new Card('9', 'H')]
    const deck = new Deck(cards)
    expect(deck.cards()).toEqual(cards)
  })

  describe('#deal', () => {
    it('removes a card from the deck and returns it', () => {
      const cards = [new Card('A', 'S'),new Card('6', 'D'),new Card('2', 'C'),new Card('9', 'H')]
      const deck = new Deck(cards)
      const card = deck.deal()
      expect(card).toEqual([new Card('9', 'H')])
      expect(deck.cardsLeft()).toEqual(3)
    })
  })

  describe('#cardsLeft', () => {
    it('returns the number of cards in the deck', () => {
      const cards = [new Card('A', 'S'),new Card('6', 'D'),new Card('2', 'C'),new Card('9', 'H')]
      const deck = new Deck(cards)
      expect(deck.cardsLeft()).toEqual(4)
    })
    it('gets updated when deal is called', () => {
      const cards = [new Card('A', 'S'),new Card('6', 'D'),new Card('2', 'C'),new Card('9', 'H')]
      const deck = new Deck(cards)
      deck.deal()
      deck.deal()
      expect(deck.cardsLeft()).toEqual(2)
    })
  })

  describe('#shuffle', () => {
    it('shuffles the deck', () => {
      const orderedCards = [1,2,3,4,5,6,7,8,9,10]
      const deck = new Deck([1,2,3,4,5,6,7,8,9,10])
      deck.shuffle()
      expect(deck.cards() === orderedCards).not.toEqual(true)
    })
  })

  describe('#build', () => {
    it('builds a deck of 52 cards', () => {
      const deck = new Deck()
      deck.build()
      expect(deck.cardsLeft()).toEqual(52)
    })
  })
})
