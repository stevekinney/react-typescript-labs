import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatInput } from './chat-input';

const meta = {
  title: '🩻 Components/ChatInput',
  component: ChatInput,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input',
    },
    busy: {
      control: 'boolean',
      description: 'Whether the input is in a busy state',
    },
    maxRows: {
      control: { type: 'number', min: 1, max: 10 },
      description: 'Maximum number of rows before scrolling',
    },
    submitLabel: {
      control: 'text',
      description: 'Label for the submit button',
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    hideLabel: {
      control: 'boolean',
      description: 'Whether to hide the label visually (still accessible)',
    },
  },
} satisfies Meta<typeof ChatInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Type a message...',
    submitLabel: 'Send',
    label: 'Message',
    hideLabel: true,
  },
};

export const WithVisibleLabel: Story = {
  args: {
    placeholder: 'Type your message here...',
    submitLabel: 'Send',
    label: 'Chat Message',
    hideLabel: false,
  },
};

export const Busy: Story = {
  args: {
    placeholder: 'Type a message...',
    busy: true,
    value: 'Processing your request...',
    submitLabel: 'Send',
  },
};

export const CustomSubmitLabel: Story = {
  args: {
    placeholder: 'Ask a question...',
    submitLabel: 'Ask',
    label: 'Question',
    hideLabel: false,
  },
};

export const WithMaxRows: Story = {
  args: {
    placeholder: 'Type a long message to see auto-resize...',
    maxRows: 3,
    submitLabel: 'Send',
  },
};

export const Interactive: Story = {
  render: (args) => {
    return (
      <div className="space-y-4">
        <ChatInput
          {...args}
          onSubmit={(value) => {
            alert(`Message sent: ${value}`);
          }}
        />
        <div className="text-sm text-slate-600 dark:text-slate-400">
          <p>Try typing a message and pressing Enter or clicking Send.</p>
          <p>Use Shift+Enter to add a new line.</p>
        </div>
      </div>
    );
  },
  args: {
    placeholder: 'Type a message and press Enter...',
    submitLabel: 'Send',
  },
};
