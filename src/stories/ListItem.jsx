import React from "react";

export const ListItem = ({ completed, text }) => {
  return (
    <li>
      <input type="checkbox" checked={completed} />
      <label>{text}</label>
    </li>
  );
};
