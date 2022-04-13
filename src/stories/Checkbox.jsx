import React from "react";
import PropTypes from "prop-types";

export const Checkbox = ({ checked, label }) => (
  <label>
    <input type="checkbox" checked={checked} />
    {label}
  </label>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  label: "Sample Text",
};
