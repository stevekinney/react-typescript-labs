import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
    alt: 'John Doe',
  },
};

export const WithFallback: Story = {
  args: {
    alt: 'Jane Smith',
    fallback: 'JS',
  },
};

export const AutoInitials: Story = {
  args: {
    alt: 'Sarah Johnson',
  },
};

export const Sizes: Story = {
  args: { alt: 'User' },
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" alt="Extra Small" />
      <Avatar size="sm" alt="Small User" />
      <Avatar size="md" alt="Medium User" />
      <Avatar size="lg" alt="Large User" />
      <Avatar size="xl" alt="Extra Large" />
    </div>
  ),
};

export const Shapes: Story = {
  args: { alt: 'User' },
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar shape="circle" alt="Circle Shape" />
      <Avatar shape="square" alt="Square Shape" />
    </div>
  ),
};

export const ImageError: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    alt: 'Failed Image',
  },
};

export const Group: Story = {
  args: { alt: 'User' },
  render: () => (
    <div className="flex -space-x-2">
      <Avatar className="ring-2 ring-white dark:ring-slate-900" alt="User One" />
      <Avatar className="ring-2 ring-white dark:ring-slate-900" alt="User Two" />
      <Avatar className="ring-2 ring-white dark:ring-slate-900" alt="User Three" />
      <Avatar className="ring-2 ring-white dark:ring-slate-900" alt="User Four" />
    </div>
  ),
};
