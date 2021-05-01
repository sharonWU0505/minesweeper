import { DEFAULT_LEVEL } from "../utils";

const CELL = {
  x: 0,
  y: 0,
  value: 0,
  isRevealed: false,
  isFlagged: false,
  isMine: false,
};

/**
 * @param {Number} rows - number of rows
 * @param {Number} cols - number of columns
 * @returns {Array} A rows * cols size game board
 */
function createGame({ rows = DEFAULT_LEVEL.rows, cols = DEFAULT_LEVEL.cols } = {}) {
  return new Array(rows).fill(0).map((_, x) =>
    new Array(cols).fill(0).map((_, y) => ({
      ...CELL,
      x,
      y,
    }))
  );
}

export default createGame;
