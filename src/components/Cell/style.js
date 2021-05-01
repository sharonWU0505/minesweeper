import styled from "styled-components";
import { Button } from "react95";

const VALUE_COLORS = {
  0: "transparent",
  1: "blue",
  2: "green",
  3: "red",
  4: "purple",
  5: "maroon",
  6: "turquoise",
  7: "black",
  8: "grey",
};

const StyledButton = styled(Button)`
  width: 34px;
  height: 36px;
  font: bold 13px ms_sans_serif;
  color: ${props => VALUE_COLORS[props.value] || VALUE_COLORS[0]};
`;

export { StyledButton };
