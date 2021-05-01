/**
 * @param {Array} board - the board of games
 * @param {Array} click - [x, y] of the click
 * @returns {Array} [an updated board after revealing, game result]
 */
function revealCells({ board, click } = {}) {
  if (board[click[0]][click[1]].isMine) {
    // game over
    return [board, false];
  }

  // deep copy the board for revising
  let newBoard = JSON.parse(JSON.stringify(board));
  let gameResult = null;

  const reveal = (x, y) => {
    if (newBoard[x] && newBoard[x][y] && !newBoard[x][y].isRevealed) {
      newBoard[x][y].isRevealed = true;

      // if the cell has no adjacent mine, keep traversing
      if (newBoard[x][y].value === 0) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            if (!(i === 0 && j === 0) && newBoard[x + i] && newBoard[x + i][y + j]) {
              reveal(x + i, y + j);
            }
          }
        }
      }
    }
  };

  reveal(click[0], click[1]);

  return [newBoard, gameResult];
}

export default revealCells;
