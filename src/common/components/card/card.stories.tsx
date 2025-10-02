import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta = {
  title: '🩻 Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'small', 'medium', 'large'],
      description: 'The padding inside the card',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          This is the main content of the card. It can contain any React components or HTML
          elements.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="small" variant="primary">
          Action
        </Button>
      </CardFooter>
    </Card>
  ),
  args: {
    padding: 'none',
  },
};

export const SimpleCard: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <p className="text-sm text-slate-700 dark:text-slate-300">
        Simple card with padding applied directly to the card component.
      </p>
    </Card>
  ),
  args: {
    padding: 'medium',
  },
};

export const ImageCard: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px] overflow-hidden">
      <div className="from-primary-400 via-primary-500 to-secondary-800 h-48 bg-radial-[at_50%]" />
      <CardHeader>
        <CardTitle>Beautiful Gradient</CardTitle>
        <CardDescription>A card with an image header</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Cards can include images or any other content at the top.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="small" variant="primary">
          Like
        </Button>
        <Button size="small" variant="ghost">
          Share
        </Button>
      </CardFooter>
    </Card>
  ),
  args: {
    padding: 'none',
  },
};

export const ProfileCard: Story = {
  render: (args) => (
    <Card {...args} className="w-[350px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="from-primary-400 via-primary-500 to-secondary-800 h-12 w-12 rounded-full bg-radial-[at_50%]" />
          <div>
            <CardTitle size="small">Jane Doe</CardTitle>
            <CardDescription>Software Engineer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-slate-700 dark:text-slate-300">
          Passionate about building great user experiences with modern web technologies.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="small" variant="primary">
          Follow
        </Button>
        <Button size="small" variant="ghost">
          Message
        </Button>
      </CardFooter>
    </Card>
  ),
  args: {
    padding: 'none',
  },
};

export const GridLayout: Story = {
  render: (args) => (
    <div className="grid grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <Card key={i} {...args}>
          <CardHeader padding="small">
            <CardTitle size="small">Card {i}</CardTitle>
          </CardHeader>
          <CardContent padding="small">
            <p className="text-sm text-slate-700 dark:text-slate-300">Card content {i}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
  args: {
    padding: 'none',
  },
};
