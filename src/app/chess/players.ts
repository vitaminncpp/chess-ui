import { Bishop, King, Knight, Pawn, Piece, Queen, Rook } from "./pieces";
import { Chessboard } from "./chessboard";
import { globalConfig } from "../config/global.config";
import { PiecePosition } from "../type/chess.type";

export class Player {
  color!: boolean;
  pieces: Piece[][] = [];
  attackMap: boolean[][] = [];
  moveMap: boolean[][] = [];
  board!: Chessboard;
  threatMap: boolean[][] = [];
  check: boolean = false;
  checkMate: boolean = false;
  staleMate: boolean = false;
  opponent!: Player;
  promotion!: () => void;
  promotionPawn: Pawn | null = null;

  constructor(board: Chessboard, color: boolean) {
    this.board = board;
    this.color = color;

    const pawns: Piece[] = [];
    for (let i = 0; i < globalConfig.SQUARE_SIZE; i++) {
      pawns.push(new Pawn(this.board, this.color ? 1 : 6, i as PiecePosition, this.color));
    }
    this.pieces.push(pawns);
    this.pieces.push([]);
    this.pieces[1].push(new Rook(this.board, this.color ? 0 : 7, 0, this.color));
    this.pieces[1].push(new Knight(this.board, this.color ? 0 : 7, 1, this.color));
    this.pieces[1].push(new Bishop(this.board, this.color ? 0 : 7, 2, this.color));
    this.pieces[1].push(new King(this.board, this.color ? 0 : 7, 3, this.color));

    this.pieces[1].push(new Queen(this.board, this.color ? 0 : 7, 4, this.color));
    this.pieces[1].push(new Bishop(this.board, this.color ? 0 : 7, 5, this.color));
    this.pieces[1].push(new Knight(this.board, this.color ? 0 : 7, 6, this.color));
    this.pieces[1].push(new Rook(this.board, this.color ? 0 : 7, 7, this.color));
  }

  setOpponent(opponent: Player) {
    this.opponent = opponent;
  }
}
