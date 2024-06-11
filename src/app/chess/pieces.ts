import { Chessboard } from "./Chessboard";
import { Player } from "./players";
import { PiecePosition, PieceType, PieceValue } from "../type/chesstypes";
import { globalConfig } from "../config/global.config";

export abstract class Piece {
  protected x: PiecePosition = -1;
  protected y: PiecePosition = -1;
  protected player!: Player;
  protected color: boolean;
  protected value: PieceValue = 0;
  protected type: PieceType = -1;
  protected legaMoves = 0;
  protected index: PiecePosition = -1;
  protected moveMap: boolean[][] = [];
  protected attackMap: boolean[][] = [];
  protected moved = false;
  protected alive = true;
  protected board: Chessboard;

  constructor(board: Chessboard, x: PiecePosition, y: PiecePosition, color: boolean) {
    this.board = board;
    this.x = x;
    this.y = y;
    this.color = color;
  }
  abstract updateMoveMap(): boolean;
  abstract updateAttackMap(): boolean;
  resetMoveMap(): boolean {
    this.moveMap.forEach(rank => {
      for (let i = 0; i < globalConfig.SQUARE_SIZE; i++) {
        rank[i] = false;
      }
    });
    return true;
  }
  resetAttackMap(): boolean {
    this.attackMap.forEach(rank => {
      for (let i = 0; i < globalConfig.SQUARE_SIZE; i++) {
        rank[i] = false;
      }
    });
    return true;
  }

  getColor(): boolean {
    return this.color;
  }
  getType(): PieceType {
    return this.type;
  }
  capture(): boolean {
    this.alive = false;
    this.x = -1;
    this.y = -1;
    return this.alive;
  }
  giveLife(i: PiecePosition, j: PiecePosition): boolean {
    this.x = i;
    this.y = j;
    this.alive = true;
    return this.alive;
  }
  moveTo(x: PiecePosition, y: PiecePosition) {}
  testForMoveMap(x: PiecePosition, y: PiecePosition): boolean {
    return false;
  }
  reset(): boolean {
    this.resetMoveMap();
    this.resetAttackMap();
    return true;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
}

export class Pawn extends Piece {
  updateMoveMap(): boolean {
    return false;
  }

  updateAttackMap(): boolean {
    return false;
  }
}

export class Knight extends Piece {
  updateMoveMap(): boolean {
    return false;
  }

  updateAttackMap(): boolean {
    return false;
  }
}

export class Bishop extends Piece {
  updateMoveMap(): boolean {
    return false;
  }

  updateAttackMap(): boolean {
    return false;
  }
}

export class Rook extends Piece {
  updateMoveMap(): boolean {
    return false;
  }

  updateAttackMap(): boolean {
    return false;
  }
}

export class Queen extends Piece {
  updateMoveMap(): boolean {
    return false;
  }

  updateAttackMap(): boolean {
    return false;
  }
}

export class King extends Piece {
  check: boolean = false;
  constructor(board: Chessboard, x: PiecePosition, y: PiecePosition, color: boolean) {
    super(board, x, y, color);
    this.check = false;
  }
  updateMoveMap(): boolean {
    return false;
  }

  updateAttackMap(): boolean {
    return false;
  }
}
