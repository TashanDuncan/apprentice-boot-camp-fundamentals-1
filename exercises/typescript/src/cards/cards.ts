// to execute the runnable code in this file, use the command
// `npn run cards` from the command line positioned at
// the project's root directory.
export class Suit{
  name: string
  constructor(name:string){
    this.name = name
  }
}

export class PlayingCardDeck{
  private cards: PlayingCard[] = []
  constructor(){
    suitNames.forEach(suitName => {
      for (let faceValue = 0; faceValue < 13; faceValue++) {
        this.cards.push(new PlayingCard(new Suit(suitName), faceValue))
      }
    })
  }
  hasCards(): boolean {
    if(this.cards.length > 0) {
      return true
    } else {
      return false
    }
  }

  getcard() {
    return this.cards.shift()
  }
}

const suitNames = [
  'clubs',
  'diamonds',
  'hearts',
  'spades'
]

export class PlayingCard {
  suit: Suit
  faceValue: number
  constructor(suit: Suit, faceValue: number){
    this.suit = suit
    this.faceValue = faceValue
  }
}
export class Cards {

  getCards(): string[] {
    const result: string[] = []
    const playingCardDeck = new PlayingCardDeck()

    while(playingCardDeck.hasCards()) {
      const card = playingCardDeck.getcard()
      let faceValueName: string
      switch (card?.faceValue) {
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
          throw new Error("Something went wrong " + card?.faceValue + " is not a valid faceValue!")
      }
      result.push(`${faceValueName} of ${card?.suit.name}`)

    }

    return result
  }
}

const cards = new Cards()
const deckInOrder = cards.getCards()

for (const card of deckInOrder) {
  console.log(card)
}