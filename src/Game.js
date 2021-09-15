import Deck from './Deck'
import BotPlayer from './BotPlayer'
const cardsPerPlayer = 5
const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
export default class Game {
  constructor(players, deck = new Deck(), numberOfBots = 3) {
    this._players = players
    this._deck = deck
    this._turnCount = 0
    this._roundResults = []
    this.addBots(numberOfBots)
  }

  turnCount() {
    return this._turnCount
  }

  players() {
    return this._players
  }

  currentPlayer() {
    return this._players[0]
  }

  roundResults() {
    return this._roundResults
  }

  turnPlayer() {
    return this.players()[this.turnCount() % this.players().length]
  }

  playTurn(playerAsked, rankAsked) {
    const cardsAwarded = this.findPlayerByName(playerAsked).takeCards(rankAsked)
    this.updateRoundResults(cardsAwarded, playerAsked, rankAsked)
    if(cardsAwarded.length > 0) {
      this.turnPlayer().addCardsToHand(cardsAwarded)
      this.botMakeGuess()
    }
    else {
      this.playerGoFish()
    }
  }

  updateRoundResults(cardsAwarded, playerAsked, rankAsked) {
    const guessInfo = `${this.turnPlayer().name()} asked ${playerAsked} for a ${rankAsked}`
    let cardsWon = ``
    if(cardsAwarded.length > 0) {
      cardsWon = ` and got (${cardsAwarded.length})`
    }
    if(this._roundResults.length > 9){
      this._roundResults.shift()
    }
    this._roundResults.push(guessInfo + cardsWon )
  }

  nextTurn() {
    if(this.over()){return 'game over'}
    this._turnCount += 1
    if(this.turnPlayer().cardsLeft() > 0){
      this.botMakeGuess()
    } else {
      this.playerGoFish()
    }
  }

  winners() {
    let winners = []
    let sortPlayers = this.players().sort((a, b) => a.score() - b.score())
    if(sortPlayers[sortPlayers.length - 1].score() != 0){
      winners.push(sortPlayers.pop())
      sortPlayers.forEach( (player) => { if(player.score() == winners[0].score()) { winners.push(player) } })
    }
    return winners
  }

  botMakeGuess() {
    if(this.turnPlayer().bot() == true){
      const guess = this.turnPlayer().makeGuess(this.players())
      this.playTurn(...guess)
    }
  }

  playerGoFish() {
    const cardFromDeck = this.deck().deal()
    this.turnPlayer().addCardsToHand(cardFromDeck)
    if(cardFromDeck.length > 0 && this.turnPlayer().bot() == false){
      this._roundResults[this.roundResults().length - 1] += ` and got a ${cardFromDeck[0].rank()} from the deck`
    }
    this.nextTurn()
  }

  findPlayerByName(name) {
    return this.players().find(player => player.name() == name)
  }

  deck() {
    return this._deck
  }

  start() {
    this.dealCards()
  }

  over() {
    let total = 0
    this.players().forEach( player => total += player.score())
    return total == ranks.length
  }

  addBots(numberOfBots) {
    Array.from(Array(numberOfBots)).forEach(() => {
      this.players().push(new BotPlayer(`bot${this.players().length}`))
    })
  }

  dealCards() {
    this.deck().build()
    this.players().forEach(player => {
      Array.from(Array(cardsPerPlayer)).forEach(() => {
        player.addCardsToHand(this.deck().deal())
      })
    })
  }
}
