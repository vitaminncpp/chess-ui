import { ChangeDetectorRef, Component } from "@angular/core";
import { AppData, appData } from "../../data/app.data";
import { Game, Move } from "../../chess/game";
import { Chessboard, Tile } from "../../chess/chessboard";
import { globalConfig } from "../../config/global.config";
import { CommonModule } from "@angular/common";
import "jquery";
import { PiecePosition, PieceType } from "../../type/chess.type";

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
  protected move: Move = new Move(true);

  constructor(private cdRef: ChangeDetectorRef) {
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
    this.jqueryRerender();
  }

  jqueryRerender() {
    $(".piece").draggable({
      containment: "table.grid#chessgrid",
      revert: true,
    });
  }
  onPieceGrab(x: number, y: number): boolean {
    if (!this.chessboard.board[x][y].piece) {
      return false;
    }
    this.moveMap = this.chessboard.board[x][y].piece!.getMoveMap();
    this.move.setSrc(x as PiecePosition, y as PiecePosition);
    this.moveMap.forEach((rank, i) => {
      rank.forEach((tile, j) => {
        if (tile) {
          $(`#${i}-${j}`).droppable({
            drop: (e: any, ui: any) => {
              this.drop(i as PiecePosition, j as PiecePosition);
            },
          });
          $(`#${i}-${j}`).css({
            background: "red",
          });
        } else {
          try {
            $(`#${i}-${j}`).css({
              background: (i + j) % 2 === 0 ? "#edd6b0" : "#b88762",
            });
            $(`#${i}-${j}`).droppable("destroy");
          } catch (err) {}
        }
      });
    });
    return true;
  }

  clearMovableTiles() {
    for (let i = 0; i < globalConfig.SQUARE_SIZE; i++) {
      for (let j = 0; j < globalConfig.SQUARE_SIZE; j++) {
        try {
          $(`#${i}-${j}`).css({
            background: (i + j) % 2 === 0 ? "#edd6b0" : "#b88762",
          });
          $(`#${i}-${j}`).droppable("destroy");
        } catch (err) {}
      }
    }
    this.moveMap = null;
  }
  drop(x: PiecePosition, y: PiecePosition) {
    this.clearMovableTiles();
    this.move.setDest(x, y);
    this.moveTo(this.move);
    this.cdRef.detectChanges();
  }

  moveTo(move: Move = this.move): Move {
    const ret: Move = this.game.move(move);
    this.updateBoard();
    this.move.reset();
    return ret;
  }
}
