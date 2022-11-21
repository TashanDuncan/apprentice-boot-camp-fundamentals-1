"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalCard = void 0;
var AnimalCard = /** @class */ (function () {
    function AnimalCard(animal) {
        this.animal = animal;
    }
    AnimalCard.prototype.snap = function (otherCard) {
        return otherCard && this.animal === otherCard.animal;
    };
    AnimalCard.prototype.toString = function () {
        return this.animal.toString();
    };
    return AnimalCard;
}());
exports.AnimalCard = AnimalCard;
