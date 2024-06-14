import { Component } from "@angular/core";
import { AppData, appData } from "../../data/app.data";
import { Game } from "../../chess/game";
import { Chessboard, Tile } from "../../chess/chessboard";
import { globalConfig } from "../../config/global.config";
import { CommonModule } from "@angular/common";
import "jquery";
import { PieceType } from "../../type/chess.type";

declare let $: any;

@Component({
  selector: "app-chessboard",
  standalone: true,
  templateUrl: "./chessboard.component.html",
  styleUrl: "./chessboard.component.scss",
  imports: [CommonModule],
})
export class ChessboardComponent {
  protected game: Game;
  protected chessboard: Chessboard;
  protected board: Array<Array<{ color: boolean; piece: PieceType } | null>>;
  protected orientation: boolean = true;
  protected globalConfig = globalConfig;
  protected appData: AppData = appData;
  protected moveMap: boolean[][] | null = null;

  constructor() {
    this.game = new Game();
    this.chessboard = this.game.getBoard();
    this.board = globalConfig.initialPosition;
    this.updateBoard();
  }
  updateBoard(): boolean {
    this.chessboard.board.forEach((rank: Tile[], i: number) => {
      rank.forEach((tile: Tile, j: number) => {
        if (tile.piece) {
          this.board[i][j] = { color: tile.piece.getColor(), piece: tile.piece.getType() };
        } else {
          this.board[i][j] = null;
        }
      });
    });
    return false;
  }
  ngOnInit() {}
  ngAfterViewChecked(): void {
    $(".piece").draggable({
      containment: "table.grid#chessgrid",
      revert: true,
    });
  }
  onPieceGrab(x: number, y: number) {
    this.moveMap = this.chessboard.board[x][y].piece!.getMoveMap();
    this.moveMap.forEach((rank, i) => {
      rank.forEach((tile, j) => {
        if (tile) {
          $(`#${i}-${j}`).droppable({
            drop: (e: any, ui: any) => {
              e.target.innerHTML = "";
              e.target.appendChild(ui.draggable[0]);
              ui.draggable.css({ top: "0px", left: "0px" });
              this.clearMovableTiles();
            },
          });
          $(`#${i}-${j}`).css({
            border: "solid 1px red",
          });
        } else {
          try {
            $(`#${i}-${j}`).css({
              border: "none",
            });
            $(`#${i}-${j}`).droppable("destroy");
          } catch (err) {}
        }
      });
    });
  }

  clearMovableTiles() {
    for (let i = 0; i < globalConfig.SQUARE_SIZE; i++) {
      for (let j = 0; j < globalConfig.SQUARE_SIZE; j++) {
        try {
          $(`#${i}-${j}`).css({
            border: "none",
          });
        } catch (err) {}
      }
    }
    this.moveMap = null;
  }
}
