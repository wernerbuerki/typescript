"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Queen = void 0;
var Piece_1 = require("./Piece");
var Queen = /** @class */ (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Queen.prototype.canMoveTo = function (position) {
        var distance = this.position.distanceFrom(position);
        return distance.rank === this.position.getRank() || distance.file === this.position.getFile().charCodeAt(0);
    };
    return Queen;
}(Piece_1.Piece));
exports.Queen = Queen;
