import type { Meta, StoryObj } from '@storybook/react-vite';
import { NameTag } from './name-tag';

const meta = {
  title: '🎸 Examples/Name Tag',
  component: NameTag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A name tag component for displaying user information with name, title, and company.',
      },
    },
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'The name to display on the name tag',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Required' },
      },
    },
    title: {
      control: 'text',
      description: 'The job title or role (optional)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    level: {
      control: 'number',
      description: 'The level of the user (optional)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    isOnline: {
      control: 'boolean',
      description: 'Whether the user is online (optional)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
} satisfies Meta<typeof NameTag>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic story with just a name
export const Default: Story = {
  args: {
    name: 'Finn the Human',
    title: 'Hero of Ooo',
    level: 34,
    isOnline: true,
  },
};
