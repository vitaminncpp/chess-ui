import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppData {
  public wk: string = "/assets/images/chess_pieces/wk.png";
  public wq: string = "/assets/images/chess_pieces/wq.png";
  public wr: string = "/assets/images/chess_pieces/wr.png";
  public wb: string = "/assets/images/chess_pieces/wb.png";
  public wn: string = "/assets/images/chess_pieces/wn.png";
  public wp: string = "/assets/images/chess_pieces/wp.png";

  public bk: string = "/assets/images/chess_pieces/bn.png";
  public bq: string = "/assets/images/chess_pieces/bq.png";
  public br: string = "/assets/images/chess_pieces/br.png";
  public bb: string = "/assets/images/chess_pieces/bb.png";
  public bn: string = "/assets/images/chess_pieces/bn.png";
  public bp: string = "/assets/images/chess_pieces/bp.png";

  public PIECE_IMG: Array<Array<string>> = [
    [this.bp, this.bn, this.bb, this.br, this.bq, this.bk],
    [this.wp, this.wn, this.wb, this.wr, this.wq, this.wk],
  ];
}
