import { Bishop, King, Knight, Piece } from "./pieces";
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
    new King(this, 1, 2, true);
    new Knight(this, 2, 3, true);
    new Knight(this, 0, 3, true);
    new Knight(this, 4, 3, true);
    new Knight(this, 7, 3, false);
    new Bishop(this, 4, 5, false);
    this.update();
  }

  move(move: Move): Move {
    this.board[move.xDest][move.yDest].piece = this.board[move.xSrc][move.ySrc].piece!;
    this.board[move.xSrc][move.ySrc].piece = null;
    const retMove: Move = this.board[move.xDest][move.yDest].piece!.moveTo(move.xDest, move.yDest);
    retMove.setSrc(move.xSrc, move.ySrc);
    return retMove;
  }
  update(): boolean {
    this.board.forEach(rank => {
      rank.forEach(tile => {
        tile.piece?.update();
      });
    });
    return true;
  }
}

export class Tile {
  piece: Piece | null;

  constructor() {
    this.piece = null;
  }
}
