import { Chessboard } from "./chessboard";
import { PiecePosition } from "../type/chess.type";
import { ChessMove } from "../type/chess.enum";

export class Game {
  board: Chessboard;

  constructor() {
    this.board = new Chessboard();
  }
  getBoard() {
    return this.board;
  }
  move(move: Move): Move {
    const ret: Move = this.board.move(move);
    this.update();
    return ret;
  }
  update(): boolean {
    return this.board.update();
  }
}

export class Move {
  xSrc: PiecePosition = -1;
  ySrc: PiecePosition = -1;
  xDest: PiecePosition = -1;
  yDest: PiecePosition = -1;

  type: ChessMove = ChessMove.NOT_APPLICABLE;
  player: boolean = true;

  constructor(player: boolean) {
    this.player = player;
    this.init();
  }
  init() {
    this.xSrc = -1;
    this.ySrc = -1;
    this.xDest = -1;
    this.yDest = -1;
  }
  setSrc(x: PiecePosition, y: PiecePosition): boolean {
    this.xSrc = x;
    this.ySrc = y;
    return true;
  }

  setDest(x: PiecePosition, y: PiecePosition) {
    this.xDest = x;
    this.yDest = y;
    return true;
  }

  reset() {
    this.xSrc = -1;
    this.ySrc = -1;
    this.xDest = -1;
    this.yDest = -1;
    this.type = ChessMove.NOT_APPLICABLE;
  }
}
