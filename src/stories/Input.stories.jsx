import React from "react";
import { userEvent, within } from "@storybook/testing-library";

import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const BaseInput = Template.bind({});
BaseInput.args = {
  placeholder: "Enter text",
  value: "",
};

BaseInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = await canvas.findByTestId("base-input");
  await userEvent.type(input, "random string", {
    delay: 100,
  });
};
