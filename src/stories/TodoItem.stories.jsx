import React from "react";
import { TodoItem } from "./TodoItem";

export default {
  title: "Example/TodoItem",
  component: TodoItem,
};

export const Primary = (args, { loaded: { todo } }) => (
  <TodoItem {...args} {...todo} />
);
Primary.args = {
  completed: true,
  title: "Item 1",
};

Primary.loaders = [
  async () => ({
    todo: await (
      await fetch("https://jsonplaceholder.typicode.com/todos/1")
    ).json(),
  }),
];
