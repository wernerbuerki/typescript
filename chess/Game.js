"use strict";
exports.__esModule = true;
exports.Game = void 0;
var King_1 = require("./King");
var Queen_1 = require("./Queen");
var Game = /** @class */ (function () {
    function Game() {
        this.pieces = Game.makePieces();
    }
    Game.makePieces = function () {
        return [
            new King_1.King('White', 'E', 1),
            new King_1.King('Black', 'E', 8),
            new Queen_1.Queen('White', 'D', 1),
            new Queen_1.Queen('Black', 'D', 8)
        ];
    };
    return Game;
}());
exports.Game = Game;
