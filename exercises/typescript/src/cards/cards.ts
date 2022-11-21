// to execute the runnable code in this file, use the command
// `npn run cards` from the command line positioned at
// the project's root directory.
export class suit{

}

export class PlayingCard {
  suit: number
  faceValue: number
  constructor(suit: number, faceValue: number){
    this.suit = suit
    this.faceValue = faceValue
  }
}
export class Cards {

  getCards(): string[] {
    const result: string[] = []
    const newDeck: PlayingCard[] = []

    for (let suit = 0; suit < 4; suit++) {
      for (let faceValue = 0; faceValue < 13; faceValue++) {
        const newCard = new PlayingCard(suit, faceValue)
        newDeck.push(newCard)
      }
    }
    for (const card of newDeck){
      let faceValueName: string

      switch (card.faceValue) {
        case 0:
          faceValueName = "ace"
          break
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          faceValueName = (card.faceValue + 1).toString()
          break
        case 10:
          faceValueName = "jack"
          break
        case 11:
          faceValueName = "queen"
          break
        case 12:
          faceValueName = "king"
          break
        default:
          throw new Error("Something went wrong " + card.faceValue + " is not a valid faceValue!")
      }
      let suitName: string
      switch (card.suit) {
        case 0:
          suitName = "clubs"
          break
        case 1:
          suitName = "diamonds"
          break
        case 2:
          suitName = "hearts"
          break
        case 3:
          suitName = "spades"
          break
        default:
          throw new Error("Something went wrong " + card.suit + " is not a valid suitName!")
      }

      result.push(`${faceValueName} of ${suitName}`)
    }

    return result
  }
}

const cards = new Cards()
const deckInOrder = cards.getCards()

for (const card of deckInOrder) {
  console.log(card)
}