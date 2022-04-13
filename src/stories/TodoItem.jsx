import React from "react";

export const TodoItem = ({ completed, title }) => {
  return (
    <div>
      <input type="checkbox" checked={completed} />
      <label>{title}</label>
    </div>
  );
};
