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

  constructor(board: Chessboard, color: boolean) {
    this.board = board;
    this.color = color;
  }

  public setPlayer(player: Player) {
    this.player = player;
  }
}

export class Pawn extends Piece {}

export class Knight extends Piece {}

export class Bishop extends Piece {}

export class Rook extends Piece {}

export class Queen extends Piece {}

export class King extends Piece {}
