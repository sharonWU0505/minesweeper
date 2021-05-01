const CELL = {
  x: 0,
  y: 0,
  value: 0,
  isRevealed: false,
  isFlagged: false,
  isBomb: false,
};

/**
 * @param {Number} rows - number of rows
 * @param {Number} cols - number of columns
 * @returns {Array} A rows * cols size game board
 */
function createGame({ rows = 9, cols = 9 } = {}) {
  return new Array(rows).fill(0).map((_, x) =>
    new Array(cols).fill(0).map((_, y) => ({
      ...CELL,
      x,
      y,
    }))
  );
}

export default createGame;
