import { DEFAULT_CELL, createMines, initializeGame } from "../../utils";

const MOCK_LEVEL = {
  rows: 2,
  cols: 2,
  mines: 1,
};

const MOCK_CELLS = [
  { ...DEFAULT_CELL, x: 0, y: 0 },
  { ...DEFAULT_CELL, x: 0, y: 1 },
  { ...DEFAULT_CELL, x: 1, y: 0 },
  { ...DEFAULT_CELL, x: 1, y: 1 },
];

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0.5);
});

// test createMines
test("createMines with mines = 1, maxIndex = 4, firstClickIndex = 0", () => {
  const minesIndices = createMines({ mines: 1, maxIndex: 4, firstClickIndex: 0 });
  minesIndices.forEach(mineIndex => {
    expect(mineIndex).toBeGreaterThan(-1);
    expect(mineIndex).toBeLessThan(4);
    expect(mineIndex).not.toBe(0);
  });
});

// test initializeGame
test("initializeGame with first click[0, 0]", () => {
  const result = initializeGame({
    cells: MOCK_CELLS,
    firstClick: [0, 0],
    level: MOCK_LEVEL,
  });

  expect(result).toEqual([
    [
      { ...DEFAULT_CELL, x: 0, y: 0, value: 1, isRevealed: true },
      { ...DEFAULT_CELL, x: 0, y: 1, value: 1 },
      { ...DEFAULT_CELL, x: 1, y: 0, isMine: true },
      { ...DEFAULT_CELL, x: 1, y: 1, value: 1 },
    ],
    null, // game haven't ended
  ]);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});
