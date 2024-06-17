import { Bishop, King, Knight, Pawn, Piece } from "./pieces";
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

    new Pawn(this, 1, 0, true);
    new Pawn(this, 1, 1, true);
    new Pawn(this, 1, 2, true);
    new Pawn(this, 1, 3, true);
    new Pawn(this, 1, 4, true);
    new Pawn(this, 1, 5, true);
    new Pawn(this, 1, 6, true);
    new Pawn(this, 1, 7, true);

    new Pawn(this, 6, 0, false);
    new Pawn(this, 6, 1, false);
    new Pawn(this, 6, 2, false);
    new Pawn(this, 6, 3, false);
    new Pawn(this, 6, 4, false);
    new Pawn(this, 6, 5, false);
    new Pawn(this, 6, 6, false);
    new Pawn(this, 6, 7, false);

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
