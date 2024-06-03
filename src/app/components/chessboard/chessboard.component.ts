import { Component } from "@angular/core";
import { AppData } from "../../data/app.data";
import { Game } from "../../chess/game";
import { Chessboard } from "../../chess/Chessboard";
import GlobalConfig from "../../config/global.config";
import { CommonModule } from "@angular/common";

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

  constructor(
    protected appData: AppData,
    protected globalConfig: GlobalConfig
  ) {
    this.game = new Game();
    this.chessboard = this.game.getBoard();
    this.board = globalConfig.initialPosition;
  }
}
