import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner } from './spinner';

const meta = {
  title: '🩻 Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'white', 'current'],
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner color="primary" />
      <Spinner color="secondary" />
      <div className="rounded bg-slate-800 p-2">
        <Spinner color="white" />
      </div>
      <div className="text-error-500">
        <Spinner color="current" />
      </div>
    </div>
  ),
};

export const WithCustomLabel: Story = {
  args: {
    label: 'Processing request...',
  },
};

export const InButton: Story = {
  render: () => (
    <button className="bg-primary-500 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white">
      <Spinner size="sm" color="white" />
      Saving...
    </button>
  ),
};
