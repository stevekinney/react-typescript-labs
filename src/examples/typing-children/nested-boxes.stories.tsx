import type { Meta, StoryObj } from '@storybook/react-vite';
import { NestedBoxes } from './nested-boxes';

const meta = {
  title: 'Examples/Nested Boxes',
  component: NestedBoxes,
} satisfies Meta<typeof NestedBoxes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
