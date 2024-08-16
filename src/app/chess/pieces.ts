import { Chessboard } from "./chessboard";
import { Player } from "./players";
import { PiecePosition, PieceType, PieceValue } from "../type/chess.type";
import { globalConfig } from "../config/global.config";
import { Move } from "./game";
import { ChessMove } from "../type/chess.enum";

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
  }

  update() {
    this.reset();
    this.updateMoveMap();
    this.updateAttackMap();
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

  moveTo(x: PiecePosition, y: PiecePosition): Move {
    this.x = x;
    this.y = y;
    const move = new Move(this.color);
    move.setDest(this.x, this.y);
    move.type = ChessMove.REGULAR_MOVE;
    return move;
  }

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
  constructor(board: Chessboard, x: PiecePosition, y: PiecePosition, color: boolean) {
    super(board, x, y, color);
    this.value = globalConfig.PAWN_VALUE;
    this.type = globalConfig.PAWN_TYPE;
  }

  updateMoveMap(): boolean {
    if (this.color) {
      if (this.x + 1 < 8) {
        if (!this.board.board[this.x + 1][this.y].piece) {
          this.moveMap[this.x + 1][this.y] = true;
          if (this.x === 1 && !this.board.board[this.x + 2][this.y].piece) {
            this.moveMap[this.x + 2][this.y] = true;
          }
        }
        if (this.y + 1 < globalConfig.SQUARE_SIZE) {
          if (
            this.board.board[this.x + 1][this.y + 1].piece &&
            !this.board.board[this.x + 1][this.y + 1].piece!.getColor()
          ) {
            this.moveMap[this.x + 1][this.y + 1] = true;
          }
        }
        if (this.y - 1 >= 0) {
          if (
            this.board.board[this.x + 1][this.y - 1].piece &&
            !this.board.board[this.x + 1][this.y - 1].piece!.getColor()
          ) {
            this.moveMap[this.x + 1][this.y - 1] = true;
          }
        }
      }
    } else {
      if (this.x - 1 >= 0) {
        if (!this.board.board[this.x - 1][this.y].piece) {
          this.moveMap[this.x - 1][this.y] = true;
          if (this.x === 6 && !this.board.board[this.x - 2][this.y].piece) {
            this.moveMap[this.x - 2][this.y] = true;
          }
        }
        if (this.y + 1 < globalConfig.SQUARE_SIZE) {
          if (
            this.board.board[this.x - 1][this.y + 1].piece &&
            this.board.board[this.x - 1][this.y + 1].piece!.getColor()
          ) {
            this.moveMap[this.x - 1][this.y + 1] = true;
          }
        }
        if (this.y - 1 >= 0) {
          if (
            this.board.board[this.x - 1][this.y - 1].piece &&
            this.board.board[this.x - 1][this.y - 1].piece!.getColor()
          ) {
            this.moveMap[this.x - 1][this.y - 1] = true;
          }
        }
      }
    }
    return true;
  }

  updateAttackMap(): boolean {
    return false;
  }
}

export class Knight extends Piece {
  constructor(board: Chessboard, x: PiecePosition, y: PiecePosition, color: boolean) {
    super(board, x, y, color);
    this.value = globalConfig.KNIGHT_VALUE;
    this.type = globalConfig.KNIGHT_TYPE;
  }

  updateMoveMap(): boolean {
    if (this.x + 2 < globalConfig.SQUARE_SIZE && this.y + 1 < globalConfig.SQUARE_SIZE) {
      if (
        !this.board.board[this.x + 2][this.y + 1].piece ||
        this.board.board[this.x + 2][this.y + 1].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x + 2][this.y + 1] = true;
      }
    }
    if (this.x + 2 < globalConfig.SQUARE_SIZE && this.y - 1 >= 0) {
      if (
        !this.board.board[this.x + 2][this.y - 1].piece ||
        this.board.board[this.x + 2][this.y - 1].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x + 2][this.y - 1] = true;
      }
    }
    if (this.x - 2 >= 0 && this.y + 1 < globalConfig.SQUARE_SIZE) {
      if (
        !this.board.board[this.x - 2][this.y + 1].piece ||
        this.board.board[this.x - 2][this.y + 1].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x - 2][this.y + 1] = true;
      }
    }
    if (this.x - 2 >= 0 && this.y - 1 >= 0) {
      if (
        !this.board.board[this.x - 2][this.y - 1].piece ||
        this.board.board[this.x - 2][this.y - 1].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x - 2][this.y - 1] = true;
      }
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE && this.y + 2 < globalConfig.SQUARE_SIZE) {
      if (
        !this.board.board[this.x + 1][this.y + 2].piece ||
        this.board.board[this.x + 1][this.y + 2].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x + 1][this.y + 2] = true;
      }
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE && this.y - 2 >= 0) {
      if (
        !this.board.board[this.x + 1][this.y - 2].piece ||
        this.board.board[this.x + 1][this.y - 2].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x + 1][this.y - 2] = true;
      }
    }
    if (this.x - 1 >= 0 && this.y + 2 < globalConfig.SQUARE_SIZE) {
      if (
        !this.board.board[this.x - 1][this.y + 2].piece ||
        this.board.board[this.x - 1][this.y + 2].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x - 1][this.y + 2] = true;
      }
    }
    if (this.x - 1 >= 0 && this.y - 2 >= 0) {
      if (
        !this.board.board[this.x - 1][this.y - 2].piece ||
        this.board.board[this.x - 1][this.y - 2].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x - 1][this.y - 2] = true;
      }
    }
    return true;
  }

  updateAttackMap(): boolean {
    return false;
  }
}

export class Bishop extends Piece {
  constructor(board: Chessboard, x: PiecePosition, y: PiecePosition, color: boolean) {
    super(board, x, y, color);
    this.value = globalConfig.BISHOP_VALUE;
    this.type = globalConfig.BISHOP_TYPE;
  }

  updateMoveMap(): boolean {
    let i: PiecePosition = (this.x + 1) as PiecePosition;
    let j: PiecePosition = (this.y + 1) as PiecePosition;
    while (i < globalConfig.SQUARE_SIZE && j < globalConfig.SQUARE_SIZE) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i++;
      j++;
    }

    i = this.x + 1;
    j = this.y - 1;
    while (i < globalConfig.SQUARE_SIZE && j >= 0) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i++;
      j--;
    }

    i = this.x - 1;
    j = this.y + 1;
    while (i >= 0 && j < globalConfig.SQUARE_SIZE) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i--;
      j++;
    }

    i = this.x - 1;
    j = this.y - 1;
    while (i >= 0 && j >= 0) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i--;
      j--;
    }

    return true;
  }

  updateAttackMap(): boolean {
    return false;
  }
}

export class Rook extends Piece {
  constructor(board: Chessboard, x: PiecePosition, y: PiecePosition, color: boolean) {
    super(board, x, y, color);
    this.value = globalConfig.ROOK_VALUE;
    this.type = globalConfig.ROOK_TYPE;
  }

  updateMoveMap(): boolean {
    let i: PiecePosition = (this.x + 1) as PiecePosition;
    let j: PiecePosition = this.y;
    while (i < globalConfig.SQUARE_SIZE) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i++;
    }
    i = this.x - 1;
    j = this.y;
    while (i >= 0) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i--;
    }
    i = this.x;
    j = this.y + 1;
    while (j < globalConfig.SQUARE_SIZE) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      j++;
    }
    i = this.x;
    j = this.y - 1;
    while (j >= 0) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      j--;
    }
    return true;
  }

  updateAttackMap(): boolean {
    return false;
  }
}

export class Queen extends Piece {
  constructor(board: Chessboard, x: PiecePosition, y: PiecePosition, color: boolean) {
    super(board, x, y, color);
    this.value = globalConfig.QUEEN_VALUE;
    this.type = globalConfig.QUEEN_TYPE;
  }

  updateMoveMap(): boolean {
    let i: PiecePosition = (this.x + 1) as PiecePosition;
    let j: PiecePosition = (this.y + 1) as PiecePosition;
    while (i < globalConfig.SQUARE_SIZE && j < globalConfig.SQUARE_SIZE) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i++;
      j++;
    }

    i = this.x + 1;
    j = this.y - 1;
    while (i < globalConfig.SQUARE_SIZE && j >= 0) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i++;
      j--;
    }

    i = this.x - 1;
    j = this.y + 1;
    while (i >= 0 && j < globalConfig.SQUARE_SIZE) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i--;
      j++;
    }
    i = this.x - 1;
    j = this.y - 1;
    while (i >= 0 && j >= 0) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i--;
      j--;
    }

    i = this.x + 1;
    j = this.y;
    while (i < globalConfig.SQUARE_SIZE) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i++;
    }

    i = this.x - 1;
    j = this.y;
    while (i >= 0) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      i--;
    }

    i = this.x;
    j = this.y + 1;
    while (j < globalConfig.SQUARE_SIZE) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      j++;
    }
    i = this.x;
    j = this.y - 1;
    while (j >= 0) {
      if (!this.board.board[i][j].piece) {
        this.moveMap[i][j] = true;
      } else {
        if (this.board.board[i][j].piece!.getColor() !== this.color) {
          this.moveMap[i][j] = true;
        }
        break;
      }
      j--;
    }

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
      if (
        !this.board.board[this.x - 1][this.y].piece ||
        this.board.board[this.x - 1][this.y].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x - 1][this.y] = true;
      }
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE) {
      if (
        !this.board.board[this.x + 1][this.y].piece ||
        this.board.board[this.x + 1][this.y].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x + 1][this.y] = true;
      }
    }
    if (this.y - 1 >= 0) {
      if (
        !this.board.board[this.x][this.y - 1].piece ||
        this.board.board[this.x][this.y - 1].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x][this.y - 1] = true;
      }
    }
    if (this.y + 1 < globalConfig.SQUARE_SIZE) {
      if (
        !this.board.board[this.x][this.y + 1].piece ||
        this.board.board[this.x][this.y + 1].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x][this.y + 1] = true;
      }
    }

    if (this.x - 1 >= 0 && this.y - 1 >= 0) {
      if (
        !this.board.board[this.x - 1][this.y - 1].piece ||
        this.board.board[this.x - 1][this.y - 1].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x - 1][this.y - 1] = true;
      }
    }
    if (this.x - 1 >= 0 && this.y + 1 < globalConfig.SQUARE_SIZE) {
      if (
        !this.board.board[this.x - 1][this.y + 1].piece ||
        this.board.board[this.x - 1][this.y + 1].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x - 1][this.y + 1] = true;
      }
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE && this.y - 1 >= 0) {
      if (
        !this.board.board[this.x + 1][this.y - 1].piece ||
        this.board.board[this.x + 1][this.y - 1].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x + 1][this.y - 1] = true;
      }
    }
    if (this.x + 1 < globalConfig.SQUARE_SIZE && this.y + 1 < globalConfig.SQUARE_SIZE) {
      if (
        !this.board.board[this.x + 1][this.y + 1].piece ||
        this.board.board[this.x + 1][this.y + 1].piece!.getColor() !== this.color
      ) {
        this.moveMap[this.x + 1][this.y + 1] = true;
      }
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
