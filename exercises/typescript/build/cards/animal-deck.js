"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalDeck = void 0;
var animal_1 = require("./animal");
var animal_card_1 = require("./animal-card");
var AnimalDeck = /** @class */ (function () {
    function AnimalDeck() {
        this.cards = [];
        for (var animal in animal_1.Animal) {
            this.cards.push(new animal_card_1.AnimalCard(animal));
            this.cards.push(new animal_card_1.AnimalCard(animal));
        }
    }
    AnimalDeck.prototype.getCards = function () {
        var result = [];
        for (var i = 0; i < this.cards.length; i++) {
            var card = this.cards[i];
            result.push(card.toString());
        }
        return result;
    };
    AnimalDeck.prototype.shuffle = function () {
        for (var i = 0; i < this.cards.length; i++) {
            var indexA = Math.floor(Math.random() * i);
            var indexB = i;
            var valueA = this.cards[indexA];
            var valueB = this.cards[indexB];
            this.cards[indexA] = valueB;
            this.cards[indexB] = valueA;
        }
    };
    AnimalDeck.prototype.deal = function () {
        return this.cards.splice(0, 1)[0];
    };
    return AnimalDeck;
}());
exports.AnimalDeck = AnimalDeck;
