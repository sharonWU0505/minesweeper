import { getCellXAndYByIndex } from "./getCellIndex";
import { DEFAULT_LEVEL, getCellIndexByXAndY } from "./index";
import revealCells from "./revealCells";

function createMines({ mines, maxIndex, firstClickIndex }) {
  let indices = new Set();

  while (indices.size < mines) {
    const randomIndex = Math.floor(Math.random() * maxIndex);
    // The first click should not be a mine
    if (randomIndex !== firstClickIndex) indices.add(randomIndex);
  }

  return indices;
}

/**
 * @param {Array} cells - an array of cells representing a game
 * @param {Array} firstClick - [x, y] of the first click
 * @param {Number} level - an object of the game level
 * @returns {Array} updated cells after assigning mines and values
 */
function initializeGame({ cells = [], firstClick = [], level = DEFAULT_LEVEL } = {}) {
  let updatedCells = cells.map(cell => ({ ...cell }));

  const { rows, cols, mines } = level;

  const minesIndices = createMines({
    mines,
    maxIndex: rows * cols,
    firstClickIndex: getCellIndexByXAndY({ x: firstClick[0], y: firstClick[1], rows }),
  });

  minesIndices.forEach(mineIndex => {
    const [rowIndex, colIndex] = getCellXAndYByIndex({ index: mineIndex, rows });

    // assign mine-cells
    updatedCells[mineIndex].isMine = true;

    // update values of mine-cells' adjacent cells
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const cellIndex = getCellIndexByXAndY({ x: rowIndex + i, y: colIndex + j, rows });
        if (
          !(i === 0 && j === 0) &&
          rowIndex + i >= 0 &&
          rowIndex + i < rows &&
          colIndex + j >= 0 &&
          colIndex + j < cols &&
          updatedCells[cellIndex]
        ) {
          updatedCells[cellIndex].value += 1;
        }
      }
    }
  });

  return revealCells({ cells: updatedCells, targetCell: firstClick, level });
}

export { createMines, initializeGame };
