export default class GlobalConfig {
  public PAWN_VALUE = 1 as const;
  public PAWN_TYPE = 0 as const;

  public KNIGHT_VALUE = 3 as const;
  public KNIGHT_TYPE = 1 as const;

  public BISHOP_VALUE = 3 as const;
  public BISHOP_TYPE = 2 as const;

  public ROOK_VALUE = 5 as const;
  public ROOK_TYPE = 3 as const;

  public QUEEN_VALUE = 9 as const;
  public QUEEN_TYPE = 4 as const;

  public KING_VALUE = 10000 as const;
  public KING_TYPE = 5 as const;

  public tileSize = 80;

  initialPosition: Array<Array<{ color: boolean; piece: 0 | 1 | 2 | 3 | 4 | 5 } | null>> = [
    [
      { color: true, piece: this.ROOK_TYPE },
      { color: true, piece: this.KNIGHT_TYPE },
      { color: true, piece: this.BISHOP_TYPE },
      { color: true, piece: this.QUEEN_TYPE },
      { color: true, piece: this.KING_TYPE },
      { color: true, piece: this.BISHOP_TYPE },
      { color: true, piece: this.KNIGHT_TYPE },
      { color: true, piece: this.ROOK_TYPE },
    ],
    [
      { color: true, piece: this.PAWN_TYPE },
      { color: true, piece: this.PAWN_TYPE },
      { color: true, piece: this.PAWN_TYPE },
      { color: true, piece: this.PAWN_TYPE },
      { color: true, piece: this.PAWN_TYPE },
      { color: true, piece: this.PAWN_TYPE },
      { color: true, piece: this.PAWN_TYPE },
      { color: true, piece: this.PAWN_TYPE },
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      { color: false, piece: this.PAWN_TYPE },
      { color: false, piece: this.PAWN_TYPE },
      { color: false, piece: this.PAWN_TYPE },
      { color: false, piece: this.PAWN_TYPE },
      { color: false, piece: this.PAWN_TYPE },
      { color: false, piece: this.PAWN_TYPE },
      { color: false, piece: this.PAWN_TYPE },
      { color: false, piece: this.PAWN_TYPE },
    ],
    [
      { color: false, piece: this.ROOK_TYPE },
      { color: false, piece: this.KNIGHT_TYPE },
      { color: false, piece: this.BISHOP_TYPE },
      { color: false, piece: this.QUEEN_TYPE },
      { color: false, piece: this.KING_TYPE },
      { color: false, piece: this.BISHOP_TYPE },
      { color: false, piece: this.KNIGHT_TYPE },
      { color: false, piece: this.ROOK_TYPE },
    ],
  ];
}
