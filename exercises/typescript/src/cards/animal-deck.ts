import { Animal as animals } from "./animal"
import { AnimalCard } from "./animal-card"
import { Card } from "./card"
import { Deck } from "./deck"
export class AnimalDeck extends Deck {
  private readonly cards: AnimalCard[]

  constructor() {
    super()
    this.cards = []

    for (const animal in animals) {
      this.cards.push(new AnimalCard(animal))
      this.cards.push(new AnimalCard(animal))
    }
  }

  getCards(): string[] {
    const result: string[] = []

    for (let i = 0; i < this.cards.length; i++) {
      const card: AnimalCard = this.cards[i]
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
