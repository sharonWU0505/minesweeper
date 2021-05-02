import React, { useState } from "react";
import { Row, Cell, ActionBar } from "../../components";
import { StyledGameInfo } from "./style";
import { getGameLevel, createGame, initializeGame, revealCells, setFlagOnCell } from "../../utils";
import config from "../../config";

const LEVEL = getGameLevel(config.level);

const MESSAGES = {
  success: "You win !!",
  failure: "You lose QQ",
  playing: "Click to play!",
};

function Game() {
  const { rows, cols, mines } = LEVEL;

  // null for not ended; true for succeeded; false for failed
  const [ended, setEnded] = useState(null);

  // true for started; false for haven't started
  const [started, setStarted] = useState(false);

  // an array of cells representing the game
  const [cells, setCells] = useState(createGame({ rows, cols }));

  // { x: x, y: y } of the cell clicked to cause failure
  const [failedCell, setFailedCell] = useState({});

  const handleGameResult = (result, x, y) => {
    if (result !== null) {
      if (!result) {
        setFailedCell({ x, y });
      }
      setEnded(result);
    }
  };

  const handleLeftClick = (event, x, y) => {
    if (event.nativeEvent.which === 1) {
      if (!started) {
        setStarted(true);
        setCells(prevCells => {
          const [updatedCells, _] = initializeGame({
            cells: prevCells,
            firstClick: [x, y],
            level: LEVEL,
          });

          return updatedCells;
        });
      } else {
        setCells(prevCells => {
          const [updatedCells, gameResult] = revealCells({
            cells: prevCells,
            targetCell: [x, y],
            level: LEVEL,
          });
          handleGameResult(gameResult, x, y);
          return updatedCells;
        });
      }
    }
  };

  const handleRightClick = (event, x, y) => {
    event.preventDefault();

    if (!started) {
      alert("Left click any cell to start the game first!");
    } else {
      setCells(prevCells => {
        const [updatedCells, gameResult] = setFlagOnCell({
          cells: prevCells,
          targetCell: [x, y],
          level: LEVEL,
        });
        handleGameResult(gameResult, x, y);
        return updatedCells;
      });
    }
  };

  const handleRestart = () => {
    setEnded(null);
    setStarted(false);
    setCells(createGame({ rows, cols }));
    setFailedCell({});
  };

  const handleSolve = () => {
    setEnded(true);
  };

  const getFlagsCount = () => {
    return cells.filter(cell => cell.isFlagged).length;
  };

  const groupCellsInRows = () => {
    let cellRows = [];
    cells.forEach((cell, index) => {
      if (index % rows === 0) {
        cellRows.push([cell]);
      } else {
        cellRows[cellRows.length - 1].push(cell);
      }
    });
    return cellRows;
  };

  return (
    <main>
      <ActionBar
        buttons={[
          { text: "Restart", onClick: handleRestart },
          { text: "Solve", onClick: handleSolve, disabled: !started },
        ]}
      />
      <StyledGameInfo>
        <h2>{ended !== null ? (ended ? MESSAGES.success : MESSAGES.failure) : MESSAGES.playing}</h2>
        <div>Mines: {mines}</div>
        <div>Flags: {getFlagsCount()}</div>
      </StyledGameInfo>

      <div>
        {groupCellsInRows(cells).map((row, idxRol) => (
          <Row key={`row_${idxRol}`}>
            {row.map((cell, idxCol) => {
              const { x, y } = cell;
              return (
                <Cell
                  key={`cell_${idxCol}`}
                  {...cell}
                  gameEnded={ended !== null}
                  isFailedCell={failedCell.x === x && failedCell.y === y}
                  onClick={event => {
                    handleLeftClick(event, x, y);
                  }}
                  onContextMenu={event => {
                    handleRightClick(event, x, y);
                  }}></Cell>
              );
            })}
          </Row>
        ))}
      </div>
    </main>
  );
}

export default Game;
