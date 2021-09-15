import Card from '../Card'
import Deck from '../Deck'
import Player from '../Player'
import Game from '../Game'

describe('Game', () => {
  it('has an array of player objects', () => {
    const players = [new Player('Trevor'), new Player('Connor')]
    const game = new Game(players)
    expect(game.players()).toEqual(players)
  })

  it('has an array of card objects', () => {
    const players = []
    const deck = [new Card('A', 'S'),new Card('6', 'D'),new Card('2', 'C'),new Card('9', 'H')]
    const game = new Game(players, deck)
    expect(game.deck()).toEqual(deck)
  })

  describe('#addBots', () => {
    it('adds bots to the game based on a value passed in', () => {
      const game = new Game([new Player('random')],[],3)
      expect(game.players().length).toEqual(4)
    })
  })

  describe('#dealCards', () => {
    it('deals each player 5 cards', () => {
      const player1 = new Player('trevor')
      const game = new Game([player1])
      game.dealCards()
      game.players().forEach( player => expect(player.cardsLeft()).toEqual(5))
    })
  })

  describe('#findPlayerByName', () => {
    it('finds player by name', () => {
      const player1 = new Player('Luna')
      const players = [new Player('Trevor'), new Player('Connor'), new Player('Jaden'), player1]
      const game = new Game(players)

      expect(game.findPlayerByName('Luna')).toEqual(player1)
    })
  })

  describe('#playerGoFish', () => {
    it('removes a card from the deck and adds it to a players hand', () => {
      const player = new Player('trevor')
      const game = new Game([player, new Player('stephen')])
      game.start()
      expect(player.cardsLeft()).toEqual(5)
      game.playerGoFish()
      expect(player.cardsLeft()).toEqual(6)
    })

    it('adds information to the round results array to show what you fished from the deck', () => {
      const player = new Player('trevor', [new Card('J','C')])
      const game = new Game([player, new Player('stephen')],new Deck([new Card('A','H')]),0)
      game.playTurn('stephen', 'J')
      game.playerGoFish()
      expect(game.roundResults()[0]).toContain(' and got a A from the deck')
    })
  })

  describe('#nextTurn', () => {
    it('increments the turn counter and takes bot turns automatically', () => {
      const player = new Player('trevor',['A', 'H'])
      const game = new Game([player])
      expect(game.turnCount()).toEqual(0)
      game.nextTurn()
      //should equal 4 because there are 3 bots in the game
      expect(game.turnCount()).toEqual(4)
    })

    it('skips a players turn if they are out of cards', () => {
      const player1 = new Player('trevor',[new Card('A', 'H')])
      const player2 = new Player('connor', [])
      const game = new Game([player1, player2])
      expect(game.turnPlayer()).toEqual(player1)
      game.nextTurn()
      expect(game.turnPlayer()).not.toEqual(player2)
    })
  })

  describe('#turnPlayer', () => {
    it('returns the player whos turn it is', () => {
      const player1 = new Player('trevor')
      const player2 = new Player('connor')
      const game = new Game([player1, player2])
      game.start()
      expect(game.turnPlayer()).toEqual(player1)
      game.nextTurn()
      expect(game.turnPlayer()).toEqual(player2)
    })
  })

  describe('#playTurn', () => {
    it('allows the player to go fish if they did not get the card asked for', () => {
      const player1 = new Player('trevor', [new Card('6', 'H')])
      const player2 = new Player('connor',[new Card('7', 'C')])
      const deck = new Deck([new Card('2', 'D')])
      const game = new Game([player1, player2],deck,0)
      game.playTurn('connor', '6')
      expect(player1.hand()).toEqual([new Card('6', 'H'),new Card('2', 'D')])
      expect(player2.hand()).toEqual([new Card('7', 'C')])
    })

    it('awards the player the card if they ask correctly', () => {
      const player1 = new Player('trevor', [new Card('7', 'H')])
      const player2 = new Player('connor',[new Card('7', 'C')])
      const deck = new Deck([new Card('2', 'D'),new Card('2', 'D')])
      const game = new Game([player1, player2],deck,0)
      game.playTurn('connor', '7')
      expect(player1.hand()).toEqual([new Card('7', 'H'),new Card('7', 'C')])
      expect(player2.hand()).toEqual([])
    })

    it('increments the turn count if they went fishing', () => {
      const player1 = new Player('trevor', [new Card('6', 'H')])
      const player2 = new Player('connor',[new Card('7', 'C')])
      const deck = new Deck([new Card('2', 'D'),new Card('2', 'D')])
      const game = new Game([player1, player2],deck,0)
      game.playTurn('connor', '6')
      expect(game.turnPlayer()).toEqual(player2)
    })

    it('allows them to have multiple turns if they guessed correctly', () => {
      const player1 = new Player('trevor', [new Card('7', 'H'),new Card('5', 'H')])
      const player2 = new Player('connor',[new Card('7', 'C'),new Card('5', 'D')])
      const deck = new Deck([new Card('2', 'D'),new Card('2', 'D')])
      const game = new Game([player1, player2],deck,0)
      game.playTurn('connor', '5')
      expect(game.turnPlayer()).toEqual(player1)
    })
  })

  describe('#over', () => {
    it('returns true if all the books have been layed', () => {
      const player1 = new Player('trevor')
      const game = new Game([player1])
      Array.from(Array(13)).forEach( () => player1.increaseScore())
      expect(game.over()).toEqual(true)
    })

    it('returns false if not all the books have been layed', () => {
      const player1 = new Player('trevor')
      const game = new Game([player1])
      expect(game.over()).toEqual(false)
    })
  })

  describe('#winners', () => {
    it('returns empty array if no winner', () => {
      const player1 = new Player('trevor')
      const game = new Game([player1])
      expect(game.winners().length).toEqual(0)
    })

    it('returns a single winning player in an array', () => {
      const player1 = new Player('trevor')
      player1.increaseScore()
      const game = new Game([player1])
      expect(game.winners()[0]).toEqual(player1)
    })

    it('returns an array of multiple players with the same ending score', () => {
      const player1 = new Player('trevor')
      player1.increaseScore()
      const player2 = new Player('trevor')
      player2.increaseScore()
      const game = new Game([player1, player2])
      expect(game.winners()).toEqual([player1, player2])
    })
  })

  describe('#updateRoundResults', () => {
    it('records what a player asked for', () => {
      const player1 = new Player('trevor')
      const game = new Game([player1])
      game.updateRoundResults([1,2,3],'bob','A')
      expect(game.roundResults()[0]).toContain('trevor asked bob for a A')
    })

    it('tells how many cards a player recieved', () => {
      const player1 = new Player('trevor')
      const game = new Game([player1])
      game.updateRoundResults([1,2,3],'bob','A')
      expect(game.roundResults()[0]).toContain('and got (3)')
    })

    it('does not say that the player got 0 cards', () => {
      const player1 = new Player('trevor')
      const game = new Game([player1])
      game.updateRoundResults([],'bob','A')
      expect(game.roundResults()[0]).not.toContain('and got (0)')
    })
  })
})
