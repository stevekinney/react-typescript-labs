import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button';
import { Tooltip } from './tooltip';

const meta = {
  title: '🩻 Components/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'The position of the tooltip',
    },
    content: {
      control: 'text',
      description: 'The tooltip content',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex items-center justify-center p-20">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
  args: {
    children: <Button>Hover me</Button>,
    content: 'This is a tooltip',
    position: 'top',
  },
};

export const AllPositions: Story = {
  args: {
    children: <span>Hover target</span>,
    content: 'Default content',
  },
  render: () => (
    <div className="flex items-center justify-center gap-8 p-20">
      <Tooltip content="Top tooltip" position="top">
        <Button size="small">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <Button size="small">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <Button size="small">Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <Button size="small">Right</Button>
      </Tooltip>
    </div>
  ),
};

export const WithLongContent: Story = {
  render: (args) => (
    <div className="flex items-center justify-center p-20">
      <Tooltip {...args}>
        <Button>Hover for info</Button>
      </Tooltip>
    </div>
  ),
  args: {
    children: <Button>Hover for info</Button>,
    content: 'This is a longer tooltip with more information that wraps to multiple lines',
    position: 'top',
  },
};
