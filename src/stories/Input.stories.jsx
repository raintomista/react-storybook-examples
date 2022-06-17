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
      source: {
        format: true,
        type: "dynamic",
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

BaseInput.parameters = {
  controls: {
    exclude: ["value"],
  },
  viewport: {
    defaultViewport: "kindleFireHD",
  },
  backgrounds: {
    default: "facebook",
    grid: {
      cellSize: 100,
      opacity: 0.5,
      cellAmount: 5,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
};

export const SecondaryInput = Template.bind({});

SecondaryInput.parameters = {
  docs: {
    description: {
      story: "Some story **markdown**",
    },
  },
};
