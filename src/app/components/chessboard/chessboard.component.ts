import { Component } from "@angular/core";
import { AppData } from "../../data/app.data";
import { Game } from "../../chess/game";
import { Chessboard } from "../../chess/Chessboard";
import GlobalConfig from "../../config/global.config";
import { CommonModule } from "@angular/common";
import "jquery";

declare var $: any;

@Component({
  selector: "app-chessboard",
  standalone: true,
  templateUrl: "./chessboard.component.html",
  styleUrl: "./chessboard.component.scss",
  imports: [CommonModule],
  providers: [AppData, GlobalConfig],
})
export class ChessboardComponent {
  protected game: Game;
  protected chessboard: Chessboard;
  protected board: Array<Array<{ color: boolean; piece: 0 | 1 | 2 | 3 | 4 | 5 } | null>>;
  protected orientation: boolean = true;

  constructor(
    protected appData: AppData,
    protected globalConfig: GlobalConfig
  ) {
    this.game = new Game();
    this.chessboard = this.game.getBoard();
    this.board = globalConfig.initialPosition;
  }
  ngOnInit() {}
  ngAfterViewChecked(): void {
    console.log("changes");
    $(".piece").draggable({
      containment: "table.grid#chessgrid", // constraints the drag to the chessboard only
      // snap: "table.grid#chessgrid td",
      revert: true,
    });
    // $("table.grid td").droppable({
    //   drop: (e: any, ui: any) => {
    //     e.target.innerHTML = "";
    //     e.target.appendChild(ui.draggable[0]);
    //     ui.draggable.css({ top: "0px", left: "0px" });
    //   },
    // });
  }
}
