import { King } from './King'
import { Queen } from './Queen'
import { Piece } from './Piece'

export class Game {
    pieces : Piece[] = Game.makePieces();

    private static makePieces(): Piece[] {
        return [
            new King('White','E',1),
            new King('Black','E',8),
            new Queen('White','D',1),
            new Queen('Black','D',8)
        ]
    }
} 