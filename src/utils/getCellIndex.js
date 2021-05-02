/**
 * @param {Number} x - cell's x position
 * @param {Number} y - cell's y position
 * @param {Number} rows - number of rows in a game
 * @returns {Number} index of a cell
 */
export function getCellIndexByXAndY({ x, y, rows }) {
  return x * rows + y;
}

/**
 * @param {Number} index - index of a cell
 * @param {Number} rows - number of rows in a game
 * @returns {Array} [x, y] representing x and y position of a cell
 */
export function getCellXAndYByIndex({ index, rows }) {
  const x = Math.floor(index / rows);
  const y = index % rows;

  return [x, y];
}
