import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from './textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success'],
      description: 'The visual style of the textarea',
    },
    autoResize: {
      control: 'boolean',
      description: 'Auto-resize based on content',
    },
    showCount: {
      control: 'boolean',
      description: 'Show character count',
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character length',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text lines',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the textarea',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here...',
    variant: 'default',
    rows: 4,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Enter your text here...',
    variant: 'error',
    rows: 4,
  },
};

export const AutoResize: Story = {
  args: {
    placeholder: 'This textarea will auto-resize as you type...',
    autoResize: true,
    rows: 2,
  },
};

export const WithCharacterCount: Story = {
  args: {
    placeholder: 'Type something...',
    showCount: true,
    maxLength: 200,
    rows: 4,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled textarea',
    value: 'This textarea is disabled',
    disabled: true,
    rows: 4,
  },
};
