import { DEFAULT_LEVEL, revealCells } from "./index";

function createMines(mines, maxIndex, firstClickIndex) {
  let indices = new Set();

  while (indices.size < mines) {
    const randomIndex = Math.floor(Math.random() * maxIndex);
    // The first click should not be a bomb
    if (randomIndex !== firstClickIndex) indices.add(randomIndex);
  }

  return indices;
}

/**
 * @param {Array} board - a game board
 * @param {Number} mines - number of mines
 * @param {Array} firstClick - [x, y] of the first click
 * @returns {Array} [A rows * cols size game board, game result]
 */
function initGame({ board, firstClick = [], mines = DEFAULT_LEVEL.mines } = {}) {
  const rows = board.length;
  const cols = board[0].length;

  let initBoard = JSON.parse(JSON.stringify(board));

  // get randomly-set mines
  const minesIndices = createMines(mines, rows * cols, firstClick[0] * 9 + firstClick[1]);
  minesIndices.forEach(mineIndex => {
    const rowIndex = parseInt(mineIndex / rows);
    const colIndex = mineIndex % rows;

    // update mines cells
    initBoard[rowIndex][colIndex].isMine = true;

    // update adjacent cells value
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          !(i === 0 && j === 0) &&
          initBoard[rowIndex + i] !== undefined &&
          initBoard[rowIndex + i][colIndex + j] !== undefined
        ) {
          initBoard[rowIndex + i][colIndex + j].value += 1;
        }
      }
    }
  });

  // update cell status after first-click
  return revealCells({ board: initBoard, click: firstClick });
}

export default initGame;
