import { PieceType } from "../type/chesstypes";

export const globalConfig = {
  PAWN_VALUE: 1,
  PAWN_TYPE: 0,

  KNIGHT_VALUE: 3,
  KNIGHT_TYPE: 1,

  BISHOP_VALUE: 3,
  BISHOP_TYPE: 2,

  ROOK_VALUE: 5,
  ROOK_TYPE: 3,

  QUEEN_VALUE: 9,
  QUEEN_TYPE: 4,

  KING_VALUE: 10000,
  KING_TYPE: 5,

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
};
