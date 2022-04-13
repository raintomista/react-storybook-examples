import React from "react";
import { userEvent, within } from "@storybook/testing-library";

import { Input } from "./Input";

export default {
  title: "Example/Input",
  component: Input,
  argTypes: {
    label: {
      description: "Something",
      type: {
        name: "string",
        required: true,
      },
      table: {
        category: "Color",
        subcategory: "Button color",
        type: { summary: "string", detail: "stringify" },
        defaultValue: { summary: "Hello", detail: "hehe" },
      },
    },
    date: {
      name: "date",
      control: null,
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Some component _markdown_",
      },
    },
  },
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

export const SecondaryInput = Template.bind({});

SecondaryInput.parameters = {
  docs: {
    description: {
      story: "Some story **markdown**",
    },
  },
};
