import { DEFAULT_CELL, revealCells } from "../../utils";

const MOCK_LEVEL = {
  rows: 3,
  cols: 3,
  mines: 2,
};

const MOCK_CELLS = [
  { ...DEFAULT_CELL, x: 0, y: 0, value: 0, isMine: true },
  { ...DEFAULT_CELL, x: 0, y: 1, value: 2 },
  { ...DEFAULT_CELL, x: 0, y: 2, value: 0, isMine: true },
  { ...DEFAULT_CELL, x: 1, y: 0, value: 1 },
  { ...DEFAULT_CELL, x: 1, y: 1, value: 2 },
  { ...DEFAULT_CELL, x: 1, y: 2, value: 1 },
  { ...DEFAULT_CELL, x: 2, y: 0, value: 0 },
  { ...DEFAULT_CELL, x: 2, y: 1, value: 0 },
  { ...DEFAULT_CELL, x: 2, y: 2, value: 0 },
];

test("revealCells with targetCell [0, 0] that fails", () => {
  const result = revealCells({
    cells: MOCK_CELLS,
    targetCell: [0, 0],
    level: MOCK_LEVEL,
  });

  expect(result).toEqual([
    [
      { ...DEFAULT_CELL, x: 0, y: 0, value: 0, isMine: true },
      { ...DEFAULT_CELL, x: 0, y: 1, value: 2 },
      { ...DEFAULT_CELL, x: 0, y: 2, value: 0, isMine: true },
      { ...DEFAULT_CELL, x: 1, y: 0, value: 1 },
      { ...DEFAULT_CELL, x: 1, y: 1, value: 2 },
      { ...DEFAULT_CELL, x: 1, y: 2, value: 1 },
      { ...DEFAULT_CELL, x: 2, y: 0, value: 0 },
      { ...DEFAULT_CELL, x: 2, y: 1, value: 0 },
      { ...DEFAULT_CELL, x: 2, y: 2, value: 0 },
    ],
    false, // fails
  ]);
});

test("revealCells with targetCell [0, 1] that reveals only targetCell", () => {
  const result = revealCells({
    cells: MOCK_CELLS,
    targetCell: [0, 1],
    level: MOCK_LEVEL,
  });

  expect(result).toEqual([
    [
      { ...DEFAULT_CELL, x: 0, y: 0, value: 0, isMine: true },
      { ...DEFAULT_CELL, x: 0, y: 1, value: 2, isRevealed: true },
      { ...DEFAULT_CELL, x: 0, y: 2, value: 0, isMine: true },
      { ...DEFAULT_CELL, x: 1, y: 0, value: 1 },
      { ...DEFAULT_CELL, x: 1, y: 1, value: 2 },
      { ...DEFAULT_CELL, x: 1, y: 2, value: 1 },
      { ...DEFAULT_CELL, x: 2, y: 0, value: 0 },
      { ...DEFAULT_CELL, x: 2, y: 1, value: 0 },
      { ...DEFAULT_CELL, x: 2, y: 2, value: 0 },
    ],
    null, // game haven't ended
  ]);
});

test("revealCells with targetCell [2, 2] that reveals adjacent cells", () => {
  const result = revealCells({
    cells: MOCK_CELLS,
    targetCell: [2, 2],
    level: MOCK_LEVEL,
  });

  expect(result).toEqual([
    [
      { ...DEFAULT_CELL, x: 0, y: 0, value: 0, isMine: true },
      { ...DEFAULT_CELL, x: 0, y: 1, value: 2 },
      { ...DEFAULT_CELL, x: 0, y: 2, value: 0, isMine: true },
      { ...DEFAULT_CELL, x: 1, y: 0, value: 1, isRevealed: true },
      { ...DEFAULT_CELL, x: 1, y: 1, value: 2, isRevealed: true },
      { ...DEFAULT_CELL, x: 1, y: 2, value: 1, isRevealed: true },
      { ...DEFAULT_CELL, x: 2, y: 0, value: 0, isRevealed: true },
      { ...DEFAULT_CELL, x: 2, y: 1, value: 0, isRevealed: true },
      { ...DEFAULT_CELL, x: 2, y: 2, value: 0, isRevealed: true },
    ],
    null, // game haven't ended
  ]);
});
