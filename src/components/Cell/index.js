import React from "react";
import PropTypes from "prop-types";
import { StyledCell, ICON_COLORS } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb, faFlag } from "@fortawesome/free-solid-svg-icons";
function Cell({ value, isMine, isRevealed, isFlagged, onClick, onContextMenu, gameEnded }) {
  const displayValue = () => {
    return isRevealed ? (
      isFlagged ? (
        <FontAwesomeIcon icon={faFlag} color={ICON_COLORS.flag} />
      ) : (
        value
      )
    ) : (
      ""
    );
  };

  const displayAnswer = () => {
    return isMine ? <FontAwesomeIcon icon={faBomb} color={ICON_COLORS.mine} /> : value || "";
  };

  return (
    <StyledCell
      onClick={onClick}
      onContextMenu={onContextMenu}
      active={isRevealed || gameEnded}
      value={value}>
      {gameEnded ? displayAnswer() : displayValue()}
    </StyledCell>
  );
}

Cell.propTypes = {
  value: PropTypes.number,
  isMine: PropTypes.bool,
  isRevealed: PropTypes.bool,
  isFlagged: PropTypes.bool,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  gameEnded: PropTypes.bool,
};

export default Cell;
