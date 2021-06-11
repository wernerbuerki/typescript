import { Piece, Position } from './Piece';

export class Queen extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position);
        return distance.rank === this.position.getRank() || distance.file === this.position.getFile().charCodeAt(0);
    }
}