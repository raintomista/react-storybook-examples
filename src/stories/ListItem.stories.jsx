import React from "react";
import { ListItem } from "./ListItem";

export default {
  title: "Example/ListItem",
  component: ListItem,
};

export const Unchecked = (args) => <ListItem {...args} />;
Unchecked.args = {
  completed: false,
  text: "Item 1",
};
