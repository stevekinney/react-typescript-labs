import type { Meta, StoryObj } from '@storybook/react-vite';
import { GrandPlans } from './grand-plans';

const meta = {
  title: '🎸 Examples/Grand Plans',
  component: GrandPlans,
} satisfies Meta<typeof GrandPlans>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
