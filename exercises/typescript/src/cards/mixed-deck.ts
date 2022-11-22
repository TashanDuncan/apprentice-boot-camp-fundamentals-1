import { AnimalDeck } from "./animal-deck"
import { PlayingCardDeck } from "./playing-card-deck"
import { Deck } from "./deck"
export class MixedDeck extends Deck {

  constructor() {
    super()
    const animalDeck = new AnimalDeck
    const playingCardDeck = new PlayingCardDeck
    while(animalDeck.hasCards()){
      this.cards.push(animalDeck.deal())
    }
    while(playingCardDeck.hasCards()){
      this.cards.push(playingCardDeck.deal())
    }
  }

}
