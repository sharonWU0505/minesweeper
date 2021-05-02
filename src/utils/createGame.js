import { DEFAULT_LEVEL, getCellXAndYByIndex } from "../utils";

const DEFAULT_CELL = {
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
 * @returns {Array} an array of cells with rows * cols size representing a game
 */
function createGame({ rows = DEFAULT_LEVEL.rows, cols = DEFAULT_LEVEL.cols } = {}) {
  return new Array(rows * cols).fill(0).map((_, index) => {
    const [x, y] = getCellXAndYByIndex({ index, rows });
    return { ...DEFAULT_CELL, x, y };
  });
}

export { DEFAULT_CELL, createGame };
