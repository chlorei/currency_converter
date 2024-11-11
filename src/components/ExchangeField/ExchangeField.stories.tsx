import type { Meta, StoryObj } from '@storybook/react';

import ExchangeField from './ExchangeField';

const meta = {
  component: ExchangeField,
} satisfies Meta<typeof ExchangeField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};