import type { Meta, StoryObj } from '@storybook/react-vite';
import { Newspaper } from './newspaper';

const meta = {
  title: 'Examples/Daily Closure/Newspaper',
  component: Newspaper,
} satisfies Meta<typeof Newspaper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
