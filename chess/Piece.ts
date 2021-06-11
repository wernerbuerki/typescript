type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1|2|3|4|5|6|7|8|9

export class Position {
    constructor(private file: File, private rank: Rank){}

    distanceFrom(position: Position) {
        return {
            rank: Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }

    getFile() {
        return this.file;
    }

    getRank() {
        return this.rank;
    }
}

export abstract class Piece {
    protected position: Position;
    
    constructor(private readonly color: Color, private file: File, private rank: Rank){
        this.position = new Position(file, rank);
    }

    moveTo(position: Position) {
        this.position = position;
    }

    abstract canMoveTo(position: Position): boolean 
    
}