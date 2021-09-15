const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
export default class Player {
  constructor (name, hand = []) {
    this._name = name
    this._hand = hand
    this._score = 0
  }

  name() {
    return this._name
  }

  score() {
    return this._score
  }

  increaseScore() {
    this._score += 1
  }

  bot() {
    return false
  }

  hand() {
    return this._hand
  }

  cardsLeft() {
    return this.hand().length
  }

  addCardsToHand(cards_to_add) {
    this.tryToLayBook()
    this._hand = this.hand().concat(cards_to_add)
  }

  takeCards(rank) {
    const cardsToReturn = this.hand().filter((card) => card.rank() == rank)
    this._hand = this.hand().filter((card) => card.rank() != rank)
    if(this.cardsLeft() > 1){
      this._hand.sort((a,b) => a.value() - b.value())
    }
    return cardsToReturn
  }

  searchForRank(rank) {
    const matchingCards = this.hand().filter(card => card.rank() == rank)
    if(matchingCards.length == 4){
      return matchingCards
    } else {
      return 'no book'
    }
  }

  tryToLayBook() {
    ranks.forEach((rank) => {
      const book = this.searchForRank(rank)
      if(book != 'no book') {
        this._hand = this.hand().filter((card) => card.rank() != rank)
        this.increaseScore()
      }
    })
  }
}
