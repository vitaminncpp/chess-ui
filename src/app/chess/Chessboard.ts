import { Piece } from "./pieces";

export class Chessboard {
  board: Tile[][] = [];

  constructor() {
    this.board = [];
    for (let i = 0; i < 8; i++) {
      this.board.push([]);
      for (let j = 0; j < 8; j++) {
        this.board[i].push(new Tile());
      }
    }
  }
}

export class Tile {
  piece: Piece | null;

  constructor() {
    this.piece = null;
  }
}
