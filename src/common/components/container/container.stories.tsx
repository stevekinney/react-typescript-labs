import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './container';

const meta = {
  title: '🩻 Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        'full',
        'prose',
      ],
    },
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'main', 'aside'],
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="rounded-lg bg-slate-100 p-8 dark:bg-slate-800">
        <h1 className="mb-4 text-2xl font-bold">Container Component</h1>
        <p>This container constrains the width and adds responsive padding.</p>
      </div>
    ),
  },
};

export const MaxWidthSizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const).map((size) => (
        <Container key={size} maxWidth={size}>
          <div className="bg-primary-100 dark:bg-primary-900/30 rounded p-4 text-center">
            maxWidth: {size}
          </div>
        </Container>
      ))}
    </div>
  ),
};

export const NoPadding: Story = {
  args: {
    noPadding: true,
    children: (
      <div className="bg-slate-100 p-8 dark:bg-slate-800">
        <p>This container has no horizontal padding.</p>
      </div>
    ),
  },
};

export const AsSection: Story = {
  args: {
    as: 'section',
    children: (
      <div className="py-12">
        <h2 className="mb-4 text-xl font-semibold">Semantic Section</h2>
        <p>This container renders as a semantic section element.</p>
      </div>
    ),
  },
};
