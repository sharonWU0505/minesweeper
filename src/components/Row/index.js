import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Row({ children }) {
  return <StyledRow>{children}</StyledRow>;
}

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
