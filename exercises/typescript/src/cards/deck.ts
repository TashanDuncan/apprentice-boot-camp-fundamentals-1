import { Card } from "./card"

export interface Deck {
    shuffle(): void
    getCards(): string[]
    deal(): Card
}