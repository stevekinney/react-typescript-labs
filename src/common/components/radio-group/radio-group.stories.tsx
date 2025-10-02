import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio, RadioGroup } from './radio-group';

const meta = {
  title: '🩻 Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The direction of the radio group',
    },
    value: {
      control: 'text',
      description: 'The selected value',
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
  args: {
    direction: 'horizontal',
  },
};

export const Vertical: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
  args: {
    direction: 'vertical',
  },
};

export const WithDefaultValue: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
  args: {
    value: 'option2',
    direction: 'horizontal',
  },
};

export const WithDisabled: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2" disabled>
        Option 2 (Disabled)
      </Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  ),
  args: {
    direction: 'horizontal',
  },
};
