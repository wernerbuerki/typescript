"use strict";
exports.__esModule = true;
exports.Piece = exports.Position = void 0;
var Position = /** @class */ (function () {
    function Position(file, rank) {
        this.file = file;
        this.rank = rank;
    }
    Position.prototype.distanceFrom = function (position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        };
    };
    Position.prototype.getFile = function () {
        return this.file;
    };
    Position.prototype.getRank = function () {
        return this.rank;
    };
    return Position;
}());
exports.Position = Position;
var Piece = /** @class */ (function () {
    function Piece(color, file, rank) {
        this.color = color;
        this.file = file;
        this.rank = rank;
        this.position = new Position(file, rank);
    }
    Piece.prototype.moveTo = function (position) {
        this.position = position;
    };
    return Piece;
}());
exports.Piece = Piece;
