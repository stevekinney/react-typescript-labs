import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './select';

const meta = {
  title: '🩻 Components/Select',
  component: Select,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disable the select',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="">Choose an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  ),
  args: {},
};

export const Disabled: Story = {
  render: (args) => (
    <Select {...args}>
      <option value="">Disabled select</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </Select>
  ),
  args: {
    disabled: true,
  },
};
