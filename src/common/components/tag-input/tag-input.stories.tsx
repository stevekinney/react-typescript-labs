import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { TagInput } from './tag-input';

const meta = {
  title: 'Components/TagInput',
  component: TagInput,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    allowDuplicates: {
      control: 'boolean',
      description: 'Whether to allow duplicate tags',
    },
    maxTags: {
      control: 'number',
      description: 'Maximum number of tags allowed',
    },
  },
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const TagInputWithState = (args: React.ComponentProps<typeof TagInput>) => {
  const [tags, setTags] = useState<string[]>(args.tags || []);

  return <TagInput {...args} tags={tags} onTagsChange={setTags} />;
};

export const Default: Story = {
  render: TagInputWithState,
  args: {
    placeholder: 'Add a tag...',
    label: 'Tags',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
};

export const WithMaxTags: Story = {
  render: TagInputWithState,
  args: {
    placeholder: 'Add a tag...',
    label: 'Limited Tags (Max 5)',
    maxTags: 5,
    tags: ['One', 'Two', 'Three'],
  },
};

export const Disabled: Story = {
  render: TagInputWithState,
  args: {
    placeholder: 'Add a tag...',
    label: 'Disabled Tags',
    disabled: true,
    tags: ['Cannot', 'Edit', 'These'],
  },
};

export const AllowDuplicates: Story = {
  render: TagInputWithState,
  args: {
    placeholder: 'Add a tag (duplicates allowed)...',
    label: 'Duplicate Tags Allowed',
    allowDuplicates: true,
    tags: ['React', 'React', 'Vue'],
  },
};

export const WithValidation: Story = {
  render: (args) => {
    const [tags, setTags] = useState<string[]>(['valid-tag', 'another-valid']);

    return (
      <div className="space-y-2">
        <TagInput
          {...args}
          tags={tags}
          onTagsChange={setTags}
          validateTag={(tag) => {
            const isValid = tag.length >= 3 && tag.length <= 20;
            if (!isValid) {
              alert('Tags must be between 3 and 20 characters');
            }
            return isValid;
          }}
        />
        <p className="text-sm text-slate-600">Tags must be 3-20 characters long</p>
      </div>
    );
  },
  args: {
    placeholder: 'Add a tag (3-20 chars)...',
    label: 'Validated Tags',
  },
};

export const HiddenLabel: Story = {
  render: TagInputWithState,
  args: {
    placeholder: 'Add a tag...',
    label: 'Hidden Label for Screen Readers',
    hideLabel: true,
    tags: ['Accessible', 'Hidden', 'Label'],
  },
};

export const Empty: Story = {
  render: TagInputWithState,
  args: {
    placeholder: 'Start typing to add tags...',
    label: 'Empty State',
    tags: [],
  },
};
