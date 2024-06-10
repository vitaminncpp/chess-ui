export interface GlobalConfig {
  [key:string]:any;
  tileSize: number;
  initialPosition: Array<Array<{ color: boolean; piece: 0 | 1 | 2 | 3 | 4 | 5 } | null>>;
}

export const globalConfig: GlobalConfig = {
  PAWN_VALUE : 1,
  PAWN_TYPE : 0,

  KNIGHT_VALUE : 3,
  KNIGHT_TYPE : 1,

  BISHOP_VALUE : 3,
  BISHOP_TYPE : 2,

  ROOK_VALUE : 5,
  ROOK_TYPE : 3,

  QUEEN_VALUE : 9,
  QUEEN_TYPE : 4,

  KING_VALUE : 10000,
  KING_TYPE : 5,
  tileSize: 80,

  initialPosition: [
    [
      { color: true, piece: 3 },
      { color: true, piece: 1 },
      { color: true, piece: 2 },
      { color: true, piece: 4 },
      { color: true, piece: 5 },
      { color: true, piece: 2 },
      { color: true, piece: 1 },
      { color: true, piece: 3 },
    ],
    [
      { color: true, piece: 0 },
      { color: true, piece: 0 },
      { color: true, piece: 0 },
      { color: true, piece: 0 },
      { color: true, piece: 0 },
      { color: true, piece: 0 },
      { color: true, piece: 0 },
      { color: true, piece: 0 },
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      { color: false, piece: 0 },
      { color: false, piece: 0 },
      { color: false, piece: 0 },
      { color: false, piece: 0 },
      { color: false, piece: 0 },
      { color: false, piece: 0 },
      { color: false, piece: 0 },
      { color: false, piece: 0 },
    ],
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
  ],
};
