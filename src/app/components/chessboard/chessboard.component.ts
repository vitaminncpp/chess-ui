import { Component } from "@angular/core";
import { AppData } from "../../data/app.data";
import { Game } from "../../chess/game";
import { Chessboard } from "../../chess/Chessboard";

@Component({
  selector: "app-chessboard",
  standalone: true,
  templateUrl: "./chessboard.component.html",
  styleUrl: "./chessboard.component.scss",
  providers: [AppData],
})
export class ChessboardComponent {
  protected game: Game;
  protected chessboard: Chessboard;
  protected board: Array<Array<{ color: boolean; piece: -1 | 0 | 1 | 2 | 3 | 4 | 5 } | null>>;

  constructor(protected appData: AppData) {
    this.game = new Game();
    this.chessboard = this.game.getBoard();
    this.board = [
      [
        { color: false, piece: 3 },
        { color: false, piece: 1 },
        { color: false, piece: 2 },
        { color: false, piece: 4 },
        { color: false, piece: 5 },
        { color: false, piece: 2 },
        { color: false, piece: 1 },
        { color: false, piece: 3 },
      ],
      [
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        {
          color: false,
          piece: -1,
        },
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        {
          color: false,
          piece: -1,
        },
      ],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        {
          color: false,
          piece: -1,
        },
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        {
          color: false,
          piece: -1,
        },
      ],
      [
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        {
          color: false,
          piece: -1,
        },
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        { color: false, piece: -1 },
        {
          color: false,
          piece: -1,
        },
      ],
    ];
  }
}
