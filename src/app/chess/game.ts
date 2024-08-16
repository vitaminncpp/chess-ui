import { Chessboard } from "./chessboard";
import { PiecePosition } from "../type/chess.type";
import { ChessMove } from "../type/chess.enum";
import { Player } from "./players";
import { State } from "./state";
import { globalConfig } from "../config/global.config";

export class Game {
  board: Chessboard;
  playerW: Player;
  playerB: Player;
  state: State = new State();

  constructor() {
    this.board = new Chessboard();
    this.playerW = new Player(this.board, true);
    this.playerB = new Player(this.board, false);
    this.playerW.setOpponent(this.playerB);
    this.playerB.setOpponent(this.playerW);
    this.update();
  }

  getBoard() {
    return this.board;
  }

  move(move: Move): Move {
    if (this.state.turn === move.player) {
      const ret: Move = this.board.move(move);
      this.update();
      this.state.turn = !this.state.turn;
      return ret;
    }
    move.type = ChessMove.WRONG_PLAYER;
    return move;
  }

  update(): boolean {
    this.board.update();
    return true;
  }

  getMoveMapFor(x: number, y: number, color: boolean): boolean[][] {
    if (this.state.turn === color) {
      return this.board.board[x][y].piece!.getMoveMap();
    }
    return globalConfig.empty;
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
