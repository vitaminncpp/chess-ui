import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ChessboardComponent } from "../chessboard/chessboard.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterOutlet, ChessboardComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
