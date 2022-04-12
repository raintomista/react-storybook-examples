import React from "react";
import PropTypes from "prop-types";

export const Input = ({ placeholder, value }) => {
  return (
    <input data-testid="base-input" placeholder={placeholder} value={value} />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
};
