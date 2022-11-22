import { Deck } from "./deck"
import { PlayingCard } from "./playing-card"
import { Suit } from "./suit"
const suitNames = [
  'clubs',
  'diamonds',
  'hearts',
  'spades'
]
export class PlayingCardDeck extends Deck {
  constructor() {
    super()
    suitNames.forEach((suitName) => {
      for (let faceValue = 0; faceValue < 13; faceValue++) {
        this.cards.push(new PlayingCard(new Suit(suitName), faceValue))
      }
    })
  }

  getcard() {
    return this.cards.shift()
  }

}
