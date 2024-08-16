import { PieceType, PieceValue } from "../type/chess.type";

export const globalConfig = {
  PAWN_VALUE: 1 as PieceValue,
  PAWN_TYPE: 0 as PieceType,

  KNIGHT_VALUE: 3 as PieceValue,
  KNIGHT_TYPE: 1 as PieceType,

  BISHOP_VALUE: 3 as PieceValue,
  BISHOP_TYPE: 2 as PieceType,

  ROOK_VALUE: 5 as PieceValue,
  ROOK_TYPE: 3 as PieceType,

  QUEEN_VALUE: 9 as PieceValue,
  QUEEN_TYPE: 4 as PieceType,

  KING_VALUE: 10000 as PieceValue,
  KING_TYPE: 5 as PieceType,

  tileSize: 80,
  SQUARE_SIZE: 8,

  initialPosition: [
    [
      { color: true, piece: 3 as PieceType },
      { color: true, piece: 1 as PieceType },
      { color: true, piece: 2 as PieceType },
      { color: true, piece: 4 as PieceType },
      { color: true, piece: 5 as PieceType },
      { color: true, piece: 2 as PieceType },
      { color: true, piece: 1 as PieceType },
      { color: true, piece: 3 as PieceType },
    ],
    [
      { color: true, piece: 0 as PieceType },
      { color: true, piece: 0 as PieceType },
      { color: true, piece: 0 as PieceType },
      { color: true, piece: 0 as PieceType },
      { color: true, piece: 0 as PieceType },
      { color: true, piece: 0 as PieceType },
      { color: true, piece: 0 as PieceType },
      { color: true, piece: 0 as PieceType },
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      { color: false, piece: 0 as PieceType },
      { color: false, piece: 0 as PieceType },
      { color: false, piece: 0 as PieceType },
      { color: false, piece: 0 as PieceType },
      { color: false, piece: 0 as PieceType },
      { color: false, piece: 0 as PieceType },
      { color: false, piece: 0 as PieceType },
      { color: false, piece: 0 as PieceType },
    ],
    [
      { color: false, piece: 3 as PieceType },
      { color: false, piece: 1 as PieceType },
      { color: false, piece: 2 as PieceType },
      { color: false, piece: 4 as PieceType },
      { color: false, piece: 5 as PieceType },
      { color: false, piece: 2 as PieceType },
      { color: false, piece: 1 as PieceType },
      { color: false, piece: 3 as PieceType },
    ],
  ],

  empty: [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],

    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ],
};
