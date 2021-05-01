import { revealCells } from "./index";

function generateBombs(bombs, maxIndex, firstClickIndex) {
  let indices = new Set();

  while (indices.size < bombs) {
    const randomIndex = Math.floor(Math.random() * maxIndex);
    // The first click should not be a bomb
    if (randomIndex !== firstClickIndex) indices.add(randomIndex);
  }

  return indices;
}

/**
 * @param {Array} board - a game board
 * @param {Number} bombs - number of bombs
 * @param {Array} firstClick - [x, y] of the first click
 * @returns {Array} A rows * cols size game board
 */
function initGame(board, bombs = 10, firstClick = []) {
  const rows = board.length;
  const cols = board[0].length;

  // get randomly-set bombs
  const bombsIndices = generateBombs(bombs, rows * cols, firstClick[0] * 9 + firstClick[1]);

  bombsIndices.forEach(bombIndex => {
    const rowIndex = parseInt(bombIndex / rows);
    const colIndex = bombIndex % rows;

    // update bombs cells
    board[rowIndex][colIndex].isBomb = true;

    // update adjacent cells value
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          !(i === 0 && j === 0) &&
          board[rowIndex + i] !== undefined &&
          board[rowIndex + i][colIndex + j] !== undefined
        ) {
          board[rowIndex + i][colIndex + j].value += 1;
        }
      }
    }
  });

  // update cell's data after first-click
  return revealCells(board, firstClick);
}

export default initGame;
