import React, { useState } from "react";
import { Row, Cell, ActionBar } from "../../components";
import { StyledGameInfo } from "./style";
import { getGameLevel, createGame, initGame, revealCells } from "../../utils";
import config from "../../config";

const LEVEL = getGameLevel(config.level);

function Game() {
  // null for not ended; true for succeeded; false for failed
  const [ended, setEnded] = useState(null);

  // true for started; false for haven't started
  const [started, setStarted] = useState(false);

  const [board, setBoard] = useState(createGame({ rows: LEVEL.rows, cols: LEVEL.cols }));

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

  const checkIfWins = newBoard => {
    for (let i = 0; i < LEVEL.rows; i++) {
      for (let j = 0; j < LEVEL.cols; j++) {
        if (newBoard[i][j].isFlagged !== newBoard[i][j].isMine) {
          return;
        }
      }
    }

    setEnded(true);
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

        checkIfWins(newBoard);

        return newBoard;
      });
    }
  };

  const handleRestart = () => {
    setEnded(null);
    setStarted(false);
    setBoard(createGame({ rows: LEVEL.rows, cols: LEVEL.cols }));
  };

  const handleSolve = () => {
    setEnded(true);
  };

  const getFlagsCount = () => {
    let count = 0;

    board.forEach(row => {
      row.forEach(cell => {
        if (cell.isFlagged) count++;
      });
    });

    return count;
  };

  return (
    <main>
      <div>
        <ActionBar
          buttons={[
            { text: "Restart", onClick: handleRestart },
            { text: "Solve", onClick: handleSolve, disabled: !started },
          ]}
        />
        <StyledGameInfo>
          <h2>{ended !== null ? (ended ? "You win!" : "You lose QQ") : "Keep playing!"}</h2>
          <div>Mines: {LEVEL.mines}</div>
          <div>Flags: {getFlagsCount()}</div>
        </StyledGameInfo>
      </div>

      <div>
        {board.map((row, idxRol) => (
          <Row key={`row_${idxRol}`}>
            {row.map((cell, idxCol) => (
              <Cell
                key={`cell_${idxCol}`}
                {...cell}
                gameEnded={ended !== null}
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
