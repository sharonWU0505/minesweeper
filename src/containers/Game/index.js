import React, { useState } from "react";
import { Row, Cell } from "../../components";
import { createGame, initGame, revealCells } from "../../utils";

function Game() {
  const [hasWon, setHasWon] = useState(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [board, setBoard] = useState(createGame());

  const handleClickCell = (x, y) => {
    if (!hasStarted) {
      setHasStarted(true);
      setBoard(initGame(board, [x, y]));
    } else {
      setBoard(revealCells(board, [x, y]));
    }
  };

  return (
    <main>
      <h2>{hasWon != null ? (hasWon ? "You win!" : "Oops, you lose QQ") : "Go playing"}</h2>
      <div>
        {board.map((row, index_r) => (
          <Row key={`row_${index_r}`}>
            {row.map((cell, index_c) => (
              <Cell
                key={`cell_${index_c}`}
                {...cell}
                onClick={() => {
                  handleClickCell(cell.x, cell.y);
                }}></Cell>
            ))}
          </Row>
        ))}
      </div>
    </main>
  );
}

export default Game;
