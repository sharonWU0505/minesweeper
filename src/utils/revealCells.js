/**
 * @param {Array} board - the board of games
 * @param {Array} click - [x, y]
 * @returns {Array} A new board with some more cells are revealed
 */
function revealCells(board, click) {
  // FIXME: to deep copy or not
  // deep copy of the board
  let newBoard = JSON.parse(JSON.stringify(board));

  const revealAll = (x, y) => {
    if (newBoard[x] && newBoard[x][y]) newBoard[x][y].isRevealed = true;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (
          !(i === 0 && j === 0) &&
          newBoard[x + i] &&
          newBoard[x + i][y + j] &&
          newBoard[x + i][y + j].value === 0
        ) {
          // if the cell has no adjacent mine, keep traversing
          revealAll(x + i, y + j);
        }
      }
    }
  };

  revealAll(click[0], click[1]);

  return newBoard;
}

export default revealCells;
