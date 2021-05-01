import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faFlag } from "@fortawesome/free-solid-svg-icons";

function Cell({ value, isBomb, isRevealed, isFlagged, onClick, onContextMenu, gameEnded }) {
  const displayValue = () => {
    return isFlagged ? <FontAwesomeIcon icon={faFlag} color={"red"} /> : isRevealed ? value : "";
  };

  const displayAnswer = () => {
    return isBomb ? <FontAwesomeIcon icon={faBomb} color={"#000000"} /> : value || "";
  };

  return (
    <StyledButton
      onClick={onClick}
      onContextMenu={onContextMenu}
      active={isRevealed || gameEnded}
      value={value}>
      {gameEnded ? displayAnswer() : displayValue()}
    </StyledButton>
  );
}

Cell.propTypes = {
  value: PropTypes.number,
  isBomb: PropTypes.bool,
  isRevealed: PropTypes.bool,
  isFlagged: PropTypes.bool,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  gameEnded: PropTypes.bool,
};

export default Cell;
