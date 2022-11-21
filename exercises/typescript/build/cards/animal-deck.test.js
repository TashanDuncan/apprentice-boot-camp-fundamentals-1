"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_deck_1 = require("./animal-deck");
describe('AnimalDeck', function () {
    test('get deck in order, return 52 cards correctly formatted', function () {
        var animalDeck = new animal_deck_1.AnimalDeck();
        expect(animalDeck.getCards()).toStrictEqual(testArray);
    });
    test('shuffle returns all cards in any order', function () {
        var animalDeck = new animal_deck_1.AnimalDeck();
        animalDeck.shuffle();
        var result = animalDeck.getCards();
        expect(result).toHaveLength(testArray.length);
        expect(result).toEqual(expect.arrayContaining(testArray));
    });
    var testArray = [
        "AARDVARK",
        "AARDVARK",
        "BABOON",
        "BABOON",
        "CAMEL",
        "CAMEL",
        "DEER",
        "DEER",
        "ELEPHANT",
        "ELEPHANT",
        "FROG",
        "FROG",
        "GORILLA",
        "GORILLA",
        "HARE",
        "HARE",
        "IMPALA",
        "IMPALA",
        "JAGUAR",
        "JAGUAR",
        "KANGAROO",
        "KANGAROO",
        "LION",
        "LION",
        "MOOSE",
        "MOOSE",
        "NEWT",
        "NEWT",
        "OCTOPUS",
        "OCTOPUS",
        "PENGUIN",
        "PENGUIN",
        "QUETZAL",
        "QUETZAL",
        "RABBIT",
        "RABBIT",
        "SALMON",
        "SALMON",
        "TORTOISE",
        "TORTOISE",
        "UAKARIS",
        "UAKARIS",
        "VAQUITA",
        "VAQUITA",
        "WHALE",
        "WHALE",
        "X_RAY_TETRA",
        "X_RAY_TETRA",
        "YAK",
        "YAK",
        "ZEBRA",
        "ZEBRA"
    ];
});
