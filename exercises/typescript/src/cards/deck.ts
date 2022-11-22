import { Card } from "./card"

export abstract class Deck {
  protected cards: Card[] = []

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
  abstract getCards(): string[]
  abstract deal(): Card
}