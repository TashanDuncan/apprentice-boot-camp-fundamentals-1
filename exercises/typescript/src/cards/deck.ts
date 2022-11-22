import { Card } from "./card"

export abstract class Deck {
    abstract shuffle(): void
    abstract getCards(): string[]
    abstract deal(): Card
}