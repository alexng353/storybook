import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "onClick" },
    variant: {
      defaultValue: "primary",
      control: {
        type: "select",
        options: ["primary", "secondary", "filter", "text", "neutral"],
      },
    },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

function args(args?: object) {
  return {
    args: {
      children: "Click Me",
      ...args,
    },
  };
}

export const Default: Story = {
  argTypes: {
    onClick: { action: "onClick" },
  },
  ...args(),
};

export const Primary: Story = {
  ...Default,
  ...args({ variant: "primary" }),
};

export const Secondary: Story = {
  ...Default,
  ...args({ variant: "secondary" }),
};

export const Filter: Story = {
  ...Default,
  ...args({ variant: "filter" }),
};

export const Text: Story = {
  ...Default,
  ...args({ variant: "text" }),
};

export const Neutral: Story = {
  ...Default,
  ...args({ variant: "neutral" }),
};
