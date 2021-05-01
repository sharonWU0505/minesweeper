import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "react95";

const StyledButton = styled(Button)`
  width: 34px;
  height: 36px;
`;

function Cell({ value, isBomb, isRevealed, isFlagged, onClick, onContextMenu, gameEnded }) {
  // TODO: display with icons

  const displayValue = () => {
    return isRevealed ? (isFlagged ? "F" : value) : "";
  };

  const displayAnswer = () => {
    return isBomb ? "B" : value || "";
  };

  const isActive = isRevealed || gameEnded;

  return (
    <StyledButton onClick={onClick} onContextMenu={onContextMenu} active={isActive}>
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
