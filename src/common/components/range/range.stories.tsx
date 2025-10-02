import type { Meta, StoryObj } from '@storybook/react-vite';
import { Range } from './range';

const meta = {
  title: 'Components/Range',
  component: Range,
  argTypes: {
    min: {
      control: 'number',
      description: 'Minimum value',
    },
    max: {
      control: 'number',
      description: 'Maximum value',
    },
    step: {
      control: 'number',
      description: 'Step increment',
    },
    value: {
      control: 'number',
      description: 'Current value',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show value label on drag',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the range slider',
    },
  },
} satisfies Meta<typeof Range>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
};

export const WithLabel: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    showLabel: true,
  },
};

export const WithSteps: Story = {
  args: {
    min: 0,
    max: 100,
    step: 10,
    showLabel: true,
  },
};

export const CustomRange: Story = {
  args: {
    min: 10,
    max: 50,
    step: 5,
    value: 30,
    showLabel: true,
  },
};

export const Disabled: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    disabled: true,
  },
};

export const MultipleRanges: Story = {
  render: () => (
    <div className="space-y-8">
      <Range min={0} max={100} value={75} showLabel label="Volume" />
      <Range min={0} max={100} value={50} showLabel label="Brightness" />
      <Range min={0} max={100} value={25} showLabel label="Contrast" />
    </div>
  ),
};
