const DEFAULT_LEVEL = {
  rows: 9,
  cols: 9,
  mines: 10,
};

/**
 * @param {String} level - level of game
 * @returns {Object} An object of level details
 */
function getGameLevel(level = "easy") {
  switch (level) {
    case "easy":
    default:
      return {
        ...DEFAULT_LEVEL,
      };
  }
}

export { getGameLevel, DEFAULT_LEVEL };
