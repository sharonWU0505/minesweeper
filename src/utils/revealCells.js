import { getCellIndexByXAndY, DEFAULT_LEVEL } from "../utils";

/**
 * @param {Array} cells - an array of cells representing a game
 * @param {Array} targetCell - [x, y] of the clicked cell
 * @param {Object} level - an object of the game level
 * @returns {Array} [updated cells after revealing, game result]
 */
function revealCells({ cells = [], targetCell = [], level = DEFAULT_LEVEL } = {}) {
  const { rows, cols } = level;

  if (cells[getCellIndexByXAndY({ x: targetCell[0], y: targetCell[1], rows })].isMine) {
    // game over
    return [cells, false];
  }

  let updatedCells = cells.map(cell => ({ ...cell }));
  let gameResult = null;

  const reveal = (x, y) => {
    const cellIndex = getCellIndexByXAndY({ x, y, rows });
    if (updatedCells[cellIndex] && !updatedCells[cellIndex].isRevealed) {
      updatedCells[cellIndex].isRevealed = true;

      // if the cell has no adjacent mine, keep traversing
      if (updatedCells[cellIndex].value === 0) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (
              !(i === 0 && j === 0) &&
              x + i >= 0 &&
              x + i < rows &&
              y + j >= 0 &&
              y + j < cols &&
              updatedCells[getCellIndexByXAndY({ x: x + i, y: y + j, rows })]
            ) {
              reveal(x + i, y + j);
            }
          }
        }
      }
    }
  };

  reveal(targetCell[0], targetCell[1]);

  return [updatedCells, gameResult];
}

export default revealCells;
