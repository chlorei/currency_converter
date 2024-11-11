import type { Meta, StoryObj } from '@storybook/react';

import MainTitle from './MainTitle';

const meta = {
  component: MainTitle,
} satisfies Meta<typeof MainTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};