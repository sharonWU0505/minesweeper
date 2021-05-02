import { DEFAULT_CELL, createGame } from "../../utils";

test("createGame with rows 0 and cols 0", () => {
  const cells = createGame({ rows: 0, cols: 0 });
  expect(cells).toEqual([]);
});

test("createGame with rows 1 and cols 1", () => {
  const cells = createGame({ rows: 1, cols: 1 });
  expect(cells).toEqual([{ ...DEFAULT_CELL }]);
});

test("createGame with rows 2 and cols 2", () => {
  const cells = createGame({ rows: 2, cols: 2 });
  const targetCells = [
    { ...DEFAULT_CELL, x: 0, y: 0 },
    { ...DEFAULT_CELL, x: 0, y: 1 },
    { ...DEFAULT_CELL, x: 1, y: 0 },
    { ...DEFAULT_CELL, x: 1, y: 1 },
  ];
  expect(cells).toEqual(targetCells);
});

export default createGame;
