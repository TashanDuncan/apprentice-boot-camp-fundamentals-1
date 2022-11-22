export abstract class Card {
  abstract snap(otherCard: Card): boolean
}