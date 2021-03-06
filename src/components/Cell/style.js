import styled from "styled-components";
import { Button } from "react95";

const ICON_COLORS = {
  mine: "black",
  flag: "brown",
  failure: "red",
};

// TODO: should support different levels
const _VALUE_COLORS = {
  0: "transparent",
  1: "blue",
  2: "green",
  3: "coral",
  4: "blueviolet",
  5: "maroon",
  6: "cornflowerblue",
  7: "black",
  8: "dimgray",
};

const StyledCell = styled(Button)`
  width: 34px;
  height: 36px;
  font: bold 13px ms_sans_serif;
  color: ${props => _VALUE_COLORS[props.value] || _VALUE_COLORS[0]};
`;

export { StyledCell, ICON_COLORS };
