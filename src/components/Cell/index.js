import React from "react";
import PropTypes from "prop-types";

function Cell({ x, y, value, isRevealed, isFlagged }) {
  return <div>Cell</div>;
}

Cell.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  value: PropTypes.number,
  isRevealed: PropTypes.bool,
  isFlagged: PropTypes.bool,
};

export default Cell;
