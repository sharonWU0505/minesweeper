import { DEFAULT_LEVEL, getCellIndexByXAndY } from "./index";

function _checkIfWon(updatedCells) {
  for (let i = 0; i < updatedCells.length; i++) {
    if (updatedCells[i].isFlagged !== updatedCells[i].isMine) {
      // game haven't fail yet
      return null;
    }
  }

  return true;
}

/**
 * @param {Array} cells - an array of cells representing a game
 * @param {Array} targetCell - [x, y] of the clicked cell
 * @param {Object} level - an object of the game level
 * @returns {Array} [updated cells after revealing, game result]
 */

function setFlagOnCell({ cells = [], targetCell = [], level = DEFAULT_LEVEL } = {}) {
  const { rows, mines } = level;

  let updatedCells = cells.map(cell => ({ ...cell }));
  let gameResult = null;

  const cellIndex = getCellIndexByXAndY({ x: targetCell[0], y: targetCell[1], rows });
  if (!updatedCells[cellIndex].isRevealed) {
    updatedCells[cellIndex].isFlagged = !cells[cellIndex].isFlagged;
  }

  // If all flags are set, check if won
  if (updatedCells.filter(cell => cell.isFlagged).length === mines) {
    gameResult = _checkIfWon(updatedCells);
  }

  return [updatedCells, gameResult];
}

export default setFlagOnCell;
