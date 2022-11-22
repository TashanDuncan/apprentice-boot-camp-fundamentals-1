import { Card } from "./card"
import { Deck } from "./deck"
import { PlayingCard } from "./playing-card"
import { Suit } from "./suit"
const suitNames = [
  'clubs',
  'diamonds',
  'hearts',
  'spades'
]
export class PlayingCardDeck implements Deck {
  private cards: PlayingCard[] = []
  constructor() {
    suitNames.forEach((suitName) => {
      for (let faceValue = 0; faceValue < 13; faceValue++) {
        this.cards.push(new PlayingCard(new Suit(suitName), faceValue))
      }
    })
  }
  hasCards(): boolean {
    if (this.cards.length > 0) {
      return true
    } else {
      return false
    }
  }

  getcard() {
    return this.cards.shift()
  }

  getCards(): string[] {
    const result: string[] = []

    for (let i = 0; i < this.cards.length; i++) {
      const card: Card = this.cards[i]
      result.push(card.toString())
    }

    return result
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const indexA = Math.floor(Math.random() * i)
      const indexB = i

      const valueA = this.cards[indexA]
      const valueB = this.cards[indexB]

      this.cards[indexA] = valueB
      this.cards[indexB] = valueA
    }
  }

  deal(): Card {
    return this.cards.splice(0, 1)[0]
  }
}
