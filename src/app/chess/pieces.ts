import { Chessboard } from "./Chessboard";
import { Player } from "./players";

export abstract class Piece {
  protected x: number = -1;
  protected y: number = -1;
  protected player: Player | null = null;
  protected color: boolean;
  protected value = 0;
  protected type = -1;
  protected legaMoves = 0;
  protected index = -1;
  protected moveMap: boolean[][] = [];
  protected attackMap: boolean[][] = [];
  protected moved = false;
  protected alive = true;
  protected board: Chessboard;

  constructor(board: Chessboard, x: number, y: number, color: boolean) {
    this.board = board;
    this.x = x;
    this.y = y;
    this.color = color;
  }
  abstract updateMoveMap(): boolean;
  abstract updateAttackMap(): boolean;
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
  constructor(board: Chessboard, x: number, y: number, color: boolean) {
    super(board, x, y, color);
  }
  updateMoveMap(): boolean {
    return false;
  }

  updateAttackMap(): boolean {
    return false;
  }
}
