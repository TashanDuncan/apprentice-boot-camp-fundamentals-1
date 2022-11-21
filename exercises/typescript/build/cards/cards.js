"use strict";
// to execute the runnable code in this file, use the command
// `npn run cards` from the command line positioned at
// the project's root directory.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cards = void 0;
var Cards = /** @class */ (function () {
    function Cards() {
    }
    Cards.prototype.getCards = function () {
        var result = [];
        var deck = [];
        for (var suit = 0; suit < 4; suit++) {
            for (var faceValue = 0; faceValue < 13; faceValue++) {
                deck.push([suit, faceValue]);
            }
        }
        var cardNumber = 0;
        for (var _i = 0, deck_1 = deck; _i < deck_1.length; _i++) {
            var card = deck_1[_i];
            var faceValueName = void 0;
            switch (card[1]) {
                case 0:
                    faceValueName = "ace";
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    faceValueName = (card[1] + 1).toString();
                    break;
                case 10:
                    faceValueName = "jack";
                    break;
                case 11:
                    faceValueName = "queen";
                    break;
                case 12:
                    faceValueName = "king";
                    break;
                default:
                    throw new Error("Something went wrong " + card[1] + " is not a valid faceValue!");
            }
            var suitName = void 0;
            switch (card[0]) {
                case 0:
                    suitName = "clubs";
                    break;
                case 1:
                    suitName = "diamonds";
                    break;
                case 2:
                    suitName = "hearts";
                    break;
                case 3:
                    suitName = "spades";
                    break;
                default:
                    throw new Error("Something went wrong " + card[0] + " is not a valid suitName!");
            }
            result[cardNumber] = faceValueName + " of " + suitName;
            cardNumber++;
        }
        return result;
    };
    return Cards;
}());
exports.Cards = Cards;
var cards = new Cards();
var deckInOrder = cards.getCards();
for (var _i = 0, deckInOrder_1 = deckInOrder; _i < deckInOrder_1.length; _i++) {
    var card = deckInOrder_1[_i];
    console.log(card);
}
