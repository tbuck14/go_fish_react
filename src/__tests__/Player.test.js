import Card from '../Card'
import Player from '../Player'

describe('Player', () => {
  it('has a name attribute', () => {
    const player = new Player('player 1')
    expect(player.name()).toEqual('player 1')
  })

  it("has an array or 'hand' of card objects", () => {
    const hand = [new Card('A', 'D'), new Card('3', 'H'),new Card('J', 'C')]
    const player1 = new Player('trevor')
    const player2 = new Player('connor', hand)
    expect(player1.hand()).toEqual([])
    expect(player2.hand()).toEqual(hand)
  })

  describe('#cardsLeft', () => {
    it('returns the amount of cards left in a the players hand', () => {
      const hand = [new Card('A', 'D'), new Card('3', 'H'),new Card('J', 'C')]
      const player1 = new Player('trevor', hand)
      expect(player1.cardsLeft()).toEqual(3)
    })
  })

  describe('#addCardsToHand', () => {
    it('adds the passed in cards to the players hand', () => {
      const player = new Player('trevor')
      expect(player.hand()).toEqual([])
      player.addCardsToHand([new Card('6','H'),new Card('6','D')])
      expect(player.hand()).toEqual([new Card('6','H'),new Card('6','D')])
    })
  })

  describe('#takeCards', () => {
    it('removes and returns all the cards matching a certain rank from the players hand', () => {
      const hand = [new Card('A', 'D'), new Card('A', 'H'),new Card('J', 'C')]
      const player1 = new Player('trevor', hand)
      expect(player1.takeCards('A')).toEqual([new Card('A', 'D'), new Card('A', 'H')])
      expect(player1.cardsLeft()).toEqual(1)
    })
  })

  describe('#increaseScore', () => {
    it('increases a players score by 1', () => {
      const player = new Player('trevor')
      expect(player.score()).toEqual(0)
      player.increaseScore()
      expect(player.score()).toEqual(1)
    })
  })

  describe('#tryToLayBook', () => {
    it('removes a book from a players hand if they have one', () => {
      const cards = [new Card('A','C'),new Card('A','C'),new Card('A','C'),new Card('A','C')]
      const player = new Player('trevor',cards)
      player.tryToLayBook()
      expect(player.cardsLeft()).toEqual(0)
    })

    it('doesnt remove any cards if the player does not have a book', () => {
      const cards = [new Card('A','C'),new Card('A','C'),new Card('A','C'),new Card('J','C')]
      const player = new Player('trevor',cards)
      player.tryToLayBook()
      expect(player.cardsLeft()).toEqual(4)
    })

    it('will lay multiple books if the player has multiple', () => {
      const cards = [new Card('A','C'),new Card('A','C'),new Card('A','C'),new Card('A','C'),new Card('J','C'),new Card('J','C'),new Card('J','C'),new Card('J','C')]
      const player = new Player('trevor',cards)
      player.tryToLayBook()
      expect(player.cardsLeft()).toEqual(0)
    })

    it('increase a players score when they lay a book', () => {
      const cards = [new Card('A','C'),new Card('A','C'),new Card('A','C'),new Card('A','C'),new Card('J','C'),new Card('J','C'),new Card('J','C'),new Card('J','C')]
      const player = new Player('trevor',cards)
      player.tryToLayBook()
      expect(player.score()).toEqual(2)
    })
  })
})
