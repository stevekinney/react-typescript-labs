import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Tag } from './tag';

const meta = {
  title: '🩻 Components/TagInput/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tag',
  },
};

export const Variants: Story = {
  args: { children: 'Tag' },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
    </div>
  ),
};

export const Sizes: Story = {
  args: { children: 'Tag' },
  render: () => (
    <div className="flex items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

export const Removable: Story = {
  args: {
    children: 'Removable Tag',
    removable: true,
    onRemove: () => console.log('Tag removed'),
  },
};

export const Interactive: Story = {
  args: { children: 'Tag' },
  render: () => {
    const [tags, setTags] = useState(['React', 'TypeScript', 'Tailwind', 'Storybook']);

    const removeTag = (index: number) => {
      setTags(tags.filter((_, i) => i !== index));
    };

    return (
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag key={tag} variant="primary" removable onRemove={() => removeTag(index)}>
            {tag}
          </Tag>
        ))}
        {tags.length === 0 && <p className="text-slate-500">No tags remaining</p>}
      </div>
    );
  },
};

export const LongContent: Story = {
  args: { children: 'Tag' },
  render: () => (
    <div className="flex max-w-md flex-wrap gap-2">
      <Tag>Short</Tag>
      <Tag>Medium Length Tag</Tag>
      <Tag removable>Very Long Tag Content That Might Wrap</Tag>
    </div>
  ),
};
