import Player from './Player'

export default class BotPlayer extends Player {
  makeGuess(players) {
    const askablePlayers = players.filter(player => player != this)
    return [askablePlayers[this.getRandomInt(askablePlayers.length)].name(), this.hand()[this.getRandomInt(this.hand().length)].rank()]
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  bot() {
    return true
  }
}
