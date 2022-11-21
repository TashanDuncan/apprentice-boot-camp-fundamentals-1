"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var animal_deck_1 = require("./animal-deck");
// to execute the runnable code in this file, use the command
// 'npm run snap' from the command line positioned at the
// root directory of this project.
var Snap = /** @class */ (function () {
    function Snap(deck) {
        this.player1Score = 0;
        this.player2Score = 0;
        this.deck = deck;
        deck.shuffle();
    }
    Snap.prototype.play = function () {
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function () {
            var currentCard, previousCard, rl, rl_1, rl_1_1, line, e_1_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        currentCard = null;
                        previousCard = null;
                        _b.label = 1;
                    case 1:
                        if (!(this.deck.getCards().length > 0)) return [3 /*break*/, 14];
                        rl = readline_1.default.createInterface({
                            input: process.stdin,
                            output: process.stdout,
                            prompt: 'play snap> '
                        });
                        rl.prompt();
                        currentCard = this.deck.deal();
                        console.log(currentCard.animal);
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 7, 8, 13]);
                        rl_1 = (e_1 = void 0, __asyncValues(rl));
                        _b.label = 3;
                    case 3: return [4 /*yield*/, rl_1.next()];
                    case 4:
                        if (!(rl_1_1 = _b.sent(), !rl_1_1.done)) return [3 /*break*/, 6];
                        line = rl_1_1.value;
                        if (line.length > 0 && line.charAt(0).toLowerCase() === 'a') {
                            if (previousCard && currentCard.snap(previousCard)) {
                                console.log('SNAP! score Player 1');
                                this.player1Score++;
                            }
                            else {
                                console.log('WRONG! deducting score from Player 1');
                                this.player1Score--;
                            }
                        }
                        else if (line.length > 0 && line.charAt(0).toLowerCase() === 'l') {
                            if (previousCard && currentCard.snap(previousCard)) {
                                console.log('SNAP! scorePlayer 2');
                                this.player2Score++;
                            }
                            else {
                                console.log('WRONG! deducting score from Player 2');
                                this.player2Score--;
                            }
                        }
                        previousCard = currentCard;
                        rl.close();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(rl_1_1 && !rl_1_1.done && (_a = rl_1.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, _a.call(rl_1)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [3 /*break*/, 1];
                    case 14:
                        if (this.player1Score === this.player2Score) {
                            console.log('Draw');
                        }
                        else if (this.player1Score > this.player2Score) {
                            console.log('Player 1 wins!');
                        }
                        else {
                            console.log('Player 2 wins!');
                        }
                        console.log('Scores: ' + this.player1Score + ' vs ' + this.player2Score);
                        process.exit(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Snap;
}());
var animalDeck = new animal_deck_1.AnimalDeck();
var snap = new Snap(animalDeck);
snap.play();
