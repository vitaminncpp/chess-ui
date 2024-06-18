export interface AppData {
  wk: string;
  wq: string;
  wr: string;
  wb: string;
  wn: string;
  wp: string;

  bk: string;
  bq: string;
  br: string;
  bb: string;
  bn: string;
  bp: string;

  PIECE_IMG: Array<Array<string>>;
}

export const appData: AppData = {
  wk: "/assets/images/chess_pieces/wk.png",
  wq: "/assets/images/chess_pieces/wq.png",
  wr: "/assets/images/chess_pieces/wr.png",
  wb: "/assets/images/chess_pieces/wb.png",
  wn: "/assets/images/chess_pieces/wn.png",
  wp: "/assets/images/chess_pieces/wp.png",

  bk: "/assets/images/chess_pieces/bk.png",
  bq: "/assets/images/chess_pieces/bq.png",
  br: "/assets/images/chess_pieces/br.png",
  bb: "/assets/images/chess_pieces/bb.png",
  bn: "/assets/images/chess_pieces/bn.png",
  bp: "/assets/images/chess_pieces/bp.png",

  PIECE_IMG: [
    [
      "/assets/images/chess_pieces/bp.png",
      "/assets/images/chess_pieces/bn.png",
      "/assets/images/chess_pieces/bb.png",
      "/assets/images/chess_pieces/br.png",
      "/assets/images/chess_pieces/bq.png",
      "/assets/images/chess_pieces/bk.png",
    ],
    [
      "/assets/images/chess_pieces/wp.png",
      "/assets/images/chess_pieces/wn.png",
      "/assets/images/chess_pieces/wb.png",
      "/assets/images/chess_pieces/wr.png",
      "/assets/images/chess_pieces/wq.png",
      "/assets/images/chess_pieces/wk.png",
    ],
  ],
};
