import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './button';

const meta = {
  title: 'Examples/Accident Counter/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click Me',
  },
};

export const Increment: Story = {
  args: {
    children: '➕ Increment',
  },
};

export const Decrement: Story = {
  args: {
    children: '➖ Decrement',
  },
};

export const Reset: Story = {
  args: {
    children: '🔁 Reset',
  },
};
