import { Piece } from "./pieces";
import { globalConfig } from "../config/global.config";
import { Move } from "./game";

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

  move(move: Move): Move {
    this.board[move.xDest][move.yDest].piece = this.board[move.xSrc][move.ySrc].piece!;
    this.board[move.xSrc][move.ySrc].piece = null;
    const retMove: Move = this.board[move.xDest][move.yDest].piece!.moveTo(move.xDest, move.yDest);
    retMove.setSrc(move.xSrc, move.ySrc);
    return retMove;
  }
}

export class Tile {
  piece: Piece | null;

  constructor() {
    this.piece = null;
  }
}
