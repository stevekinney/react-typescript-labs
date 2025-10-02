import type { Meta, StoryObj } from '@storybook/react-vite';
import { Plus, Trash2, Download, ChevronRight, Settings, Heart } from 'lucide-react';

import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
      description: 'The visual style of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger Button',
    variant: 'danger',
    size: 'medium',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    variant: 'primary',
    size: 'large',
  },
};

export const AsLink: Story = {
  args: {
    children: 'Link Button',
    href: 'https://example.com',
    variant: 'primary',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};

export const WithOnClick: Story = {
  args: {
    children: 'Click Me',
    variant: 'secondary',
    size: 'medium',
    onClick: () => alert('Button clicked!'),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Add Item',
    leftIcon: Plus,
    variant: 'primary',
    size: 'medium',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next',
    rightIcon: ChevronRight,
    variant: 'primary',
    size: 'medium',
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Download',
    leftIcon: Download,
    rightIcon: ChevronRight,
    variant: 'secondary',
    size: 'medium',
  },
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button iconOnly leftIcon={Plus} variant="primary">
        Add
      </Button>
      <Button iconOnly leftIcon={Trash2} variant="danger">
        Delete
      </Button>
      <Button iconOnly leftIcon={Settings} variant="secondary">
        Settings
      </Button>
      <Button iconOnly leftIcon={Heart} variant="ghost">
        Favorite
      </Button>
    </div>
  ),
};

export const IconButtons: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button leftIcon={Plus} variant="primary">
          Create New
        </Button>
        <Button leftIcon={Download} variant="secondary">
          Export
        </Button>
        <Button leftIcon={Trash2} variant="danger">
          Delete
        </Button>
      </div>
      <div className="flex gap-2">
        <Button rightIcon={ChevronRight} variant="primary" size="small">
          Continue
        </Button>
        <Button rightIcon={ChevronRight} variant="secondary" size="medium">
          Next Step
        </Button>
        <Button rightIcon={ChevronRight} variant="ghost" size="large">
          Learn More
        </Button>
      </div>
    </div>
  ),
};
