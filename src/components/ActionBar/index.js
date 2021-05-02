import React from "react";
import PropTypes from "prop-types";
import { Button } from "react95";
import { StyledActionBar } from "./style";

function ActionBar({ buttons = [] }) {
  return (
    <StyledActionBar data-testid="actionBar">
      {buttons.map((button, index) => {
        const { onClick, disabled, text } = button;
        return (
          <Button key={`button_${index}`} onClick={onClick} disabled={!!disabled} role="button">
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
