import React from "react";
import PropTypes from "prop-types";
import { StyledCell, ICON_COLORS } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faFlag } from "@fortawesome/free-solid-svg-icons";

function Cell({
  value,
  isMine,
  isRevealed,
  isFlagged,
  onClick,
  onContextMenu,
  gameEnded,
  isFailedCell,
}) {
  const displayValue = () => {
    return isFlagged ? (
      <FontAwesomeIcon data-testid="cell-flag" icon={faFlag} color={ICON_COLORS.flag} />
    ) : isRevealed ? (
      <span data-testid="cell-value">{value}</span>
    ) : (
      <span data-testid="cell-hidden-value">{""}</span>
    );
  };

  const displayAnswer = () => {
    return isMine ? (
      <FontAwesomeIcon
        data-testid="cell-mine"
        icon={faBomb}
        color={isFailedCell ? ICON_COLORS.failure : ICON_COLORS.mine}
      />
    ) : (
      <span data-testid="cell-solution">{value || ""}</span>
    );
  };

  return (
    <StyledCell
      data-testid="cell"
      onClick={onClick}
      onContextMenu={onContextMenu}
      active={isRevealed || gameEnded}
      disable={isRevealed || gameEnded}
      value={value}>
      {gameEnded ? displayAnswer() : displayValue()}
    </StyledCell>
  );
}

Cell.propTypes = {
  value: PropTypes.number.isRequired,
  isMine: PropTypes.bool.isRequired,
  isRevealed: PropTypes.bool.isRequired,
  isFlagged: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onContextMenu: PropTypes.func.isRequired,
  gameEnded: PropTypes.bool.isRequired,
  isFailedCell: PropTypes.bool.isRequired,
};

export default Cell;
