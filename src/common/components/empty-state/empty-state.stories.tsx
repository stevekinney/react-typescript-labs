import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Inbox,
  Search,
  FileX,
  ShoppingCart,
  Users,
  AlertCircle,
  CheckCircle,
  Plus,
} from 'lucide-react';
import { EmptyState } from './empty-state';
import { Button } from '../button';

const meta = {
  title: 'Components/EmptyState',
  component: EmptyState,
  argTypes: {},
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Inbox,
    title: 'No messages',
    description: 'You have no messages in your inbox. Start a conversation to see messages here.',
  },
};

export const WithAction: Story = {
  args: {
    icon: FileX,
    title: 'No documents found',
    description: 'Get started by creating your first document.',
    actions: (
      <Button leftIcon={Plus} variant="primary">
        Create Document
      </Button>
    ),
  },
};

export const WithMultipleActions: Story = {
  args: {
    icon: ShoppingCart,
    title: 'Your cart is empty',
    description: "Looks like you haven't added anything to your cart yet.",
    actions: (
      <>
        <Button variant="primary">Browse Products</Button>
        <Button variant="ghost">View Wishlist</Button>
      </>
    ),
  },
};

export const SearchNoResults: Story = {
  args: {
    icon: Search,
    title: 'No results found',
    description:
      "We couldn't find any results matching your search. Try different keywords or filters.",
  },
};

export const Success: Story = {
  args: {
    icon: CheckCircle,
    title: 'All tasks completed!',
    description: "Great job! You've completed all your tasks for today.",
    actions: <Button variant="primary">View Summary</Button>,
  },
};

export const Warning: Story = {
  args: {
    icon: AlertCircle,
    title: 'Connection unstable',
    description: 'Your internet connection appears to be unstable. Some features may be limited.',
  },
};

export const Error: Story = {
  args: {
    icon: AlertCircle,
    title: 'Something went wrong',
    description: 'We encountered an error while loading your data. Please try again.',
    actions: <Button variant="danger">Retry</Button>,
  },
};

export const TeamMembers: Story = {
  args: {
    icon: Users,
    title: 'Invite team members',
    description: 'Get started by inviting team members to collaborate on your project.',
    actions: (
      <>
        <Button leftIcon={Plus} variant="primary">
          Invite Members
        </Button>
        <Button variant="ghost">Learn More</Button>
      </>
    ),
  },
};

export const CustomContent: Story = {
  args: {
    icon: Inbox,
    title: 'Custom Content Example',
    description: 'This empty state includes custom content below.',
    children: (
      <div className="mt-8 rounded-lg bg-slate-50 p-4 dark:bg-slate-900">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          This is custom content that can be added to the empty state.
        </p>
      </div>
    ),
  },
};
