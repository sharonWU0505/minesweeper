import React from "react";
import PropTypes from "prop-types";
import { Button } from "react95";
import { StyledActionBar } from "./style";

function ActionBar({ buttons }) {
  return (
    <StyledActionBar>
      {buttons.map((button, index) => {
        const { onClick, disabled, text } = button;
        return (
          <Button key={`button_${index}`} onClick={onClick} disabled={!!disabled}>
            {text}
          </Button>
        );
      })}
    </StyledActionBar>
  );
}

ActionBar.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object),
};

export default ActionBar;
