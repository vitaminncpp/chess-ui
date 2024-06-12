import { Chessboard } from "./chessboard";
import { King } from "./pieces";

export class Game {
  board: Chessboard;
  wk: King;

  constructor() {
    this.board = new Chessboard();
    this.wk = new King(this.board, 4, 4, true);
  }
  getBoard() {
    return this.board;
  }
}
