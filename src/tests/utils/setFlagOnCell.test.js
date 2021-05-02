import { DEFAULT_CELL, setFlagOnCell } from "../../utils";

const MOCK_LEVEL = {
  rows: 2,
  cols: 2,
  mines: 1,
};

const MOCK_CELLS_FLAGGED = [
  { ...DEFAULT_CELL, x: 0, y: 0, isMine: true },
  { ...DEFAULT_CELL, x: 0, y: 1, isFlagged: true },
  { ...DEFAULT_CELL, x: 1, y: 0 },
  { ...DEFAULT_CELL, x: 1, y: 1 },
];

const MOCK_CELLS_CLEAN = [
  { ...DEFAULT_CELL, x: 0, y: 0, isMine: true },
  { ...DEFAULT_CELL, x: 0, y: 1 },
  { ...DEFAULT_CELL, x: 1, y: 0 },
  { ...DEFAULT_CELL, x: 1, y: 1 },
];

test("setFlagOnCell with targetCell [1, 1] that haven't win", () => {
  const result = setFlagOnCell({
    cells: MOCK_CELLS_FLAGGED,
    targetCell: [1, 1],
    level: MOCK_LEVEL,
  });

  expect(result).toEqual([
    [
      { ...DEFAULT_CELL, x: 0, y: 0, isMine: true },
      { ...DEFAULT_CELL, x: 0, y: 1, isFlagged: true },
      { ...DEFAULT_CELL, x: 1, y: 0 },
      { ...DEFAULT_CELL, x: 1, y: 1, isFlagged: true },
    ],
    null, // game haven't ended
  ]);
});

test("setFlagOnCell with targetCell [0, 1] that remove the flag on targetCell", () => {
  const result = setFlagOnCell({
    cells: MOCK_CELLS_FLAGGED,
    targetCell: [0, 1],
    level: MOCK_LEVEL,
  });

  expect(result).toEqual([
    [
      { ...DEFAULT_CELL, x: 0, y: 0, isMine: true },
      { ...DEFAULT_CELL, x: 0, y: 1, isFlagged: false },
      { ...DEFAULT_CELL, x: 1, y: 0 },
      { ...DEFAULT_CELL, x: 1, y: 1 },
    ],
    null, // game haven't ended
  ]);
});

test("setFlagOnCell with targetCell [0, 0] that wins", () => {
  const result = setFlagOnCell({
    cells: MOCK_CELLS_CLEAN,
    targetCell: [0, 0],
    level: MOCK_LEVEL,
  });

  expect(result).toEqual([
    [
      { ...DEFAULT_CELL, x: 0, y: 0, isMine: true, isFlagged: true },
      { ...DEFAULT_CELL, x: 0, y: 1 },
      { ...DEFAULT_CELL, x: 1, y: 0 },
      { ...DEFAULT_CELL, x: 1, y: 1 },
    ],
    true, // wins
  ]);
});
