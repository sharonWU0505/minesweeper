import React, { useState } from "react";
import { Row, Cell } from "../../components";
import { createGame, initGame, revealCells } from "../../utils";

function Game() {
  // gameEnded: null for not ended, true for succeed, false for failed
  const [gameEnded, setGameEnded] = useState(null);

  const [gameStarted, setGameStarted] = useState(false);
  const [board, setBoard] = useState(createGame());

  const handleLeftClick = (event, x, y) => {
    if (event.nativeEvent.which === 1) {
      if (!gameStarted) {
        setGameStarted(true);

        setBoard(prevBoard => {
          const [initBoard, _] = initGame({ board: prevBoard, firstClick: [x, y] });
          return initBoard;
        });
      } else {
        setBoard(prevBoard => {
          const [newBoard, gameResult] = revealCells({ board: prevBoard, click: [x, y] });
          if (gameResult !== null) setGameEnded(gameResult);
          return newBoard;
        });
      }
    }
  };

  const handleRightClick = (event, x, y) => {
    event.preventDefault();

    if (!gameStarted) {
      alert("Left click any cell to start the game first!");
    } else {
      setBoard(prevBoard => {
        prevBoard[x][y].isFlagged = true;
        prevBoard[x][y].isRevealed = true;
        return prevBoard;
      });
      // TODO: update number of mines left
      // TODO: detect if wins
    }
  };

  return (
    <main>
      <h2>{gameEnded !== null ? (gameEnded ? "You win!" : "Oops, you lose QQ") : "Go playing"}</h2>
      <div>
        {board.map((row, index_r) => (
          <Row key={`row_${index_r}`}>
            {row.map((cell, index_c) => (
              <Cell
                key={`cell_${index_c}`}
                {...cell}
                gameEnded={gameEnded !== null}
                onClick={event => {
                  handleLeftClick(event, cell.x, cell.y);
                }}
                onContextMenu={event => {
                  handleRightClick(event, cell.x, cell.y);
                }}></Cell>
            ))}
          </Row>
        ))}
      </div>
    </main>
  );
}

export default Game;
