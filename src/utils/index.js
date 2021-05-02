import { DEFAULT_CELL, createGame } from "./createGame";
import { createMines, initializeGame } from "./initializeGame";
import revealCells from "./revealCells";
import setFlagOnCell from "./setFlagOnCell";
import { getGameLevel, DEFAULT_LEVEL } from "./getGameLevel";
import { getCellIndexByXAndY, getCellXAndYByIndex } from "./getCellIndex";

export {
  DEFAULT_CELL,
  createGame,
  createMines,
  initializeGame,
  revealCells,
  setFlagOnCell,
  getGameLevel,
  DEFAULT_LEVEL,
  getCellIndexByXAndY,
  getCellXAndYByIndex,
};
