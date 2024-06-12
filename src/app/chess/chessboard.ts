import { Piece } from "./pieces";
import { globalConfig } from "../config/global.config";

export class Chessboard {
  board: Tile[][] = [];

  constructor() {
    this.board = [];
    for (let i = 0; i < globalConfig.SQUARE_SIZE; i++) {
      this.board.push([]);
      for (let j = 0; j < globalConfig.SQUARE_SIZE; j++) {
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
