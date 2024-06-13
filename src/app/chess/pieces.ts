import { Chessboard } from "./chessboard";
import { Player } from "./players";
import { PiecePosition, PieceType, PieceValue } from "../type/chess.type";
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
    this.board.board[x][y].piece = this;
    this.init();
  }
  init() {
    this.moveMap = [];
    this.attackMap = [];
    for (let i = 0; i < globalConfig.SQUARE_SIZE; i++) {
      this.moveMap.push([]);
      this.attackMap.push([]);
      for (let j = 0; j < globalConfig.SQUARE_SIZE; j++) {
        this.moveMap[i].push(false);
        this.attackMap[i].push(false);
      }
    }
    this.reset();
    this.updateMoveMap();
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
  getMoveMap(): boolean[][] {
    return this.moveMap;
  }

  getAttackMap(): boolean[][] {
    return this.attackMap;
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
    this.value = globalConfig.KING_VALUE;
    this.type = globalConfig.KING_TYPE;
    this.check = false;
  }
  updateMoveMap(): boolean {
    if (this.x - 1 >= 0) {
      this.moveMap[this.x - 1][this.y] = true;
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE) {
      this.moveMap[this.x + 1][this.y] = true;
    }
    if (this.y - 1 >= 0) {
      this.moveMap[this.x][this.y - 1] = true;
    }
    if (this.y + 1 < globalConfig.SQUARE_SIZE) {
      this.moveMap[this.x][this.y + 1] = true;
    }

    if (this.x - 1 >= 0 && this.y - 1 >= 0) {
      this.moveMap[this.x - 1][this.y - 1] = true;
    }
    if (this.x - 1 >= 0 && this.y + 1 < globalConfig.SQUARE_SIZE) {
      this.moveMap[this.x - 1][this.y + 1] = true;
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE && this.y - 1 >= 0) {
      this.moveMap[this.x + 1][this.y - 1] = true;
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE && this.y + 1 < globalConfig.SQUARE_SIZE) {
      this.moveMap[this.x + 1][this.y + 1] = true;
    }
    return true;
  }

  updateAttackMap(): boolean {
    if (this.x - 1 >= 0) {
      this.attackMap[this.x - 1][this.y] = true;
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE) {
      this.attackMap[this.x + 1][this.y] = true;
    }
    if (this.y - 1 >= 0) {
      this.attackMap[this.x][this.y - 1] = true;
    }
    if (this.y + 1 < globalConfig.SQUARE_SIZE) {
      this.attackMap[this.x][this.y + 1] = true;
    }

    if (this.x - 1 >= 0 && this.y - 1 >= 0) {
      this.attackMap[this.x - 1][this.y - 1] = true;
    }
    if (this.x - 1 >= 0 && this.y + 1 < globalConfig.SQUARE_SIZE) {
      this.attackMap[this.x - 1][this.y + 1] = true;
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE && this.y - 1 >= 0) {
      this.attackMap[this.x + 1][this.y - 1] = true;
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE && this.y + 1 < globalConfig.SQUARE_SIZE) {
      this.attackMap[this.x + 1][this.y + 1] = true;
    }
    return true;
  }
}
