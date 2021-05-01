import React, { useState } from "react";
import { Row, Cell } from "../../components";
import { createGame, initGame, revealCells } from "../../utils";

function Game() {
  const [ended, setEnded] = useState(null); // null for not ended; true for succeeded; false for failed
  const [started, setStarted] = useState(false);
  const [board, setBoard] = useState(createGame());

  const handleLeftClick = (event, x, y) => {
    if (event.nativeEvent.which === 1) {
      if (!started) {
        setStarted(true);
        setBoard(prevBoard => {
          const [initBoard, _] = initGame({ board: prevBoard, firstClick: [x, y] });
          return initBoard;
        });
      } else {
        setBoard(prevBoard => {
          const [newBoard, gameResult] = revealCells({ board: prevBoard, click: [x, y] });
          if (gameResult !== null) setEnded(gameResult);
          return newBoard;
        });
      }
    }
  };

  const handleRightClick = (event, x, y) => {
    event.preventDefault();

    if (!started) {
      alert("Left click any cell to start the game first!");
    } else {
      setBoard(prevBoard => {
        let newBoard = JSON.parse(JSON.stringify(prevBoard));
        newBoard[x][y].isFlagged = !prevBoard[x][y].isFlagged;
        newBoard[x][y].isRevealed = !prevBoard[x][y].isRevealed;
        return newBoard;
      });
      // TODO: update number of mines left
      // TODO: detect if wins
    }
  };

  return (
    <main>
      <h2>{ended !== null ? (ended ? "You win!" : "Oops, you lose QQ") : "Go playing"}</h2>
      <div>
        {board.map((row, index_r) => (
          <Row key={`row_${index_r}`}>
            {row.map((cell, index_c) => (
              <Cell
                key={`cell_${index_c}`}
                {...cell}
                ended={ended !== null}
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
