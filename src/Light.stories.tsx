import type { Meta, StoryObj } from "@storybook/react";
import Light from "./Light";
const meta: Meta<typeof Light> = {
  //creating a group
  component: Light,
  title: "Light",
};
export default meta;
type Story = StoryObj<typeof meta>;
export const base: Story = {
  //it will be show up as a single
  args: {
    variant: "red"
  },
};

export const Blue: Story = {
  args: {
    variant: "blue"
  }
};
