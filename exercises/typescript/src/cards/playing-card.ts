import { Card } from "./card"
import { Suit } from "./suit"
export class PlayingCard extends Card{
  suit: Suit
  faceValue: number
  constructor(suit: Suit, faceValue: number) {
    super()
    this.suit = suit
    this.faceValue = faceValue
  }

  snap(otherCard: PlayingCard): boolean {
    return otherCard && this.faceValue === otherCard.faceValue
  }

  toString(): string {
    return this.faceValue.toString()
  }
}
