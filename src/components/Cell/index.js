import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Button } from "react95";

const StyledButton = styled(Button)`
  width: 34px;
  height: 36px;
`;

function Cell({ value, isRevealed, isFlagged, onClick }) {
  // TODO: display with icons
  return <StyledButton onClick={onClick}>{isFlagged ? "F" : isRevealed ? value : ""}</StyledButton>;
}

Cell.propTypes = {
  value: PropTypes.number,
  isRevealed: PropTypes.bool,
  isFlagged: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Cell;
