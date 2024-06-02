import { Chessboard } from "./Chessboard";

export class Game {
  board: Chessboard;

  constructor() {
    this.board = new Chessboard();
  }
  getBoard() {
    return this.board;
  }
}
