import { Component } from "@angular/core";
import { AppData, appData } from "../../data/app.data";
import { Game } from "../../chess/game";
import { Chessboard } from "../../chess/Chessboard";
import { globalConfig } from "../../config/global.config";
import { CommonModule } from "@angular/common";
import "jquery";
import { PieceType } from "../../type/chesstypes";

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

  constructor() {
    this.game = new Game();
    this.chessboard = this.game.getBoard();
    this.board = globalConfig.initialPosition;
  }
  ngOnInit() {}
  ngAfterViewChecked(): void {
    console.log("changes");
    $(".piece").draggable({
      containment: "table.grid#chessgrid",
      revert: true,
    });
    $("table.grid td").droppable({
      drop: (e: any, ui: any) => {
        e.target.innerHTML = "";
        e.target.appendChild(ui.draggable[0]);
        ui.draggable.css({ top: "0px", left: "0px" });
      },
    });
  }
}
