import React from "react";
import PropTypes from "prop-types";

function Row({ children }) {
  return <div>{children}</div>;
}

Row.propTypes = {
  children: PropTypes.node,
};

export default Row;
