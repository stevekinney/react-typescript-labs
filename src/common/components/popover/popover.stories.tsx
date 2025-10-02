import type { Meta, StoryObj } from '@storybook/react-vite';
import { Popover } from './popover';
import { Button } from '../button/button';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the popover is open',
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Click me</Button>,
    content: (
      <div>
        <h3 className="mb-2 font-semibold">Popover Title</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          This is the popover content. It can contain any React elements.
        </p>
      </div>
    ),
  },
};

export const TopPosition: Story = {
  args: {
    ...Default.args,
  },
};

export const MinimalAppearance: Story = {
  args: {
    ...Default.args,
    content: (
      <div>
        <p className="text-sm">Minimal style with backdrop blur effect</p>
      </div>
    ),
  },
};

export const Simple: Story = {
  args: {
    ...Default.args,
    content: (
      <div>
        <p className="text-sm">Simple popover with basic content</p>
      </div>
    ),
  },
};

export const WithForm: Story = {
  args: {
    trigger: <Button variant="secondary">Settings</Button>,
    content: (
      <div className="space-y-3">
        <h3 className="font-semibold">Preferences</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Enable notifications</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Show hints</span>
          </label>
        </div>
        <Button size="small" variant="primary" className="w-full">
          Save
        </Button>
      </div>
    ),
  },
};

export const Interactive: Story = {
  render: (args) => {
    return (
      <div className="flex gap-4">
        <Popover
          {...args}
          trigger={<Button variant="primary">Top</Button>}
          content="Popover positioned at top"
        />
        <Popover
          {...args}
          trigger={<Button variant="secondary">Bottom</Button>}
          content="Popover positioned at bottom"
        />
      </div>
    );
  },
  args: {
    trigger: <Button>Default Trigger</Button>,
    content: 'Default content',
  },
};
