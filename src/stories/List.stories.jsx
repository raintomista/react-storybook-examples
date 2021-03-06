import React from "react";

import { List } from "./List";
import { ListItem } from "./ListItem";
import { Unchecked } from "./ListItem.stories";

export default {
  title: "Example/List",
  component: List,
};

const ListTemplate = ({ items, ...args }) => (
  <List>
    {items.map((item) => (
      <ListItem {...item} />
    ))}
  </List>
);

export const Empty = ListTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = ListTemplate.bind({});
OneItem.args = {
  items: [
    {
      ...Unchecked.args,
    },
  ],
};
