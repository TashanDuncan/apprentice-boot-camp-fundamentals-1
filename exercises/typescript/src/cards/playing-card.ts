import { Card } from "./card"
import { Suit } from "./suit"
export class PlayingCard implements Card{
  suit: Suit
  faceValue: number
  constructor(suit: Suit, faceValue: number) {
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
