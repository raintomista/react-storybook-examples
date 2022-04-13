import React from "react";

export const Checkbox = ({ checked, label }) => (
  <label>
    <input type="checkbox" checked={checked} />
    {label}
  </label>
);
