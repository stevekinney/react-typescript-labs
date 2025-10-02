import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton, SkeletonAvatar, SkeletonButton, SkeletonText, SkeletonTitle } from './skeleton';

const meta = {
  title: '🩻 Components/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'title', 'button', 'avatar', 'card', 'image', 'input'],
      description: 'The variant of the skeleton',
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
      description: 'The animation style',
    },
    width: {
      control: 'text',
      description: 'Custom width (string or number)',
    },
    height: {
      control: 'text',
      description: 'Custom height (string or number)',
    },
    count: {
      control: 'number',
      description: 'Number of skeleton elements to render',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'text',
    animation: 'pulse',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    width: '100%',
  },
};

export const Title: Story = {
  args: {
    variant: 'title',
    width: '200px',
  },
};

export const Button: Story = {
  args: {
    variant: 'button',
  },
};

export const Avatar: Story = {
  args: {
    variant: 'avatar',
    width: 48,
    height: 48,
  },
};

export const Card: Story = {
  args: {
    variant: 'card',
  },
};

export const Image: Story = {
  args: {
    variant: 'image',
    width: 200,
  },
};

export const Input: Story = {
  args: {
    variant: 'input',
  },
};

export const MultipleLines: Story = {
  args: {
    variant: 'text',
    count: 3,
    width: '100%',
  },
};

export const WaveAnimation: Story = {
  args: {
    variant: 'text',
    animation: 'wave',
    width: '100%',
  },
};

export const NoAnimation: Story = {
  args: {
    variant: 'text',
    animation: 'none',
    width: '100%',
  },
};

export const BlogPost: Story = {
  render: () => (
    <article className="max-w-2xl space-y-4">
      <SkeletonTitle width="60%" />
      <div className="flex items-center gap-2">
        <SkeletonAvatar size={32} />
        <SkeletonText width="120px" />
      </div>
      <SkeletonText count={4} width="100%" />
      <Skeleton variant="image" height={300} />
      <SkeletonText count={3} width="100%" />
    </article>
  ),
};

export const UserCard: Story = {
  render: () => (
    <div className="flex items-center gap-4 rounded-lg border border-slate-200 p-4 dark:border-slate-800">
      <SkeletonAvatar size={64} />
      <div className="flex-1 space-y-2">
        <SkeletonTitle width="150px" />
        <SkeletonText width="200px" />
        <SkeletonText width="180px" />
      </div>
      <SkeletonButton />
    </div>
  ),
};

export const ProductGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton variant="image" />
          <SkeletonTitle />
          <SkeletonText width="80%" />
          <SkeletonText width="60%" />
          <SkeletonButton width="100%" />
        </div>
      ))}
    </div>
  ),
};

export const TableRows: Story = {
  render: () => (
    <div className="space-y-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex gap-4">
          <Skeleton width="10%" height={40} />
          <Skeleton width="30%" height={40} />
          <Skeleton width="30%" height={40} />
          <Skeleton width="20%" height={40} />
          <Skeleton width="10%" height={40} />
        </div>
      ))}
    </div>
  ),
};

export const Form: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <div>
        <SkeletonText width="80px" className="mb-2" />
        <Skeleton variant="input" />
      </div>
      <div>
        <SkeletonText width="100px" className="mb-2" />
        <Skeleton variant="input" />
      </div>
      <div>
        <SkeletonText width="120px" className="mb-2" />
        <Skeleton height={100} width="100%" />
      </div>
      <div className="flex gap-2">
        <SkeletonButton width="100px" />
        <SkeletonButton width="100px" />
      </div>
    </div>
  ),
};

export const AllAnimations: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="mb-2 text-sm font-medium">Pulse Animation</h3>
        <Skeleton variant="text" animation="pulse" width="100%" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">Wave Animation</h3>
        <Skeleton variant="text" animation="wave" width="100%" />
      </div>
      <div>
        <h3 className="mb-2 text-sm font-medium">No Animation</h3>
        <Skeleton variant="text" animation="none" width="100%" />
      </div>
    </div>
  ),
};
