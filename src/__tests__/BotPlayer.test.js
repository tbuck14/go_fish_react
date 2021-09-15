import Player from '../Player'
import BotPlayer from '../BotPlayer'
import Card from '../Card'

describe('BotPlayer', () => {
  describe('#makeGuess', () => {
    it('returns an array holding a player name and rank', () => {
      const bot = new BotPlayer('bot1',[new Card('A','H')])
      const players = [new Player('fred1'),new Player('fred2'),new Player('fred3'),new Player('fred4'), bot]
      const guess = bot.makeGuess(players)   // guess should look like ['player name','rank']
      expect(guess[0]).toContain('fred')
      expect(guess[1]).toEqual('A')
    })
  })
})
