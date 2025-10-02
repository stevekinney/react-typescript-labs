import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, AlertTitle, AlertDescription } from './alert';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'The variant of the alert',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Information</AlertTitle>
      <AlertDescription>
        This is an informational alert. It provides general information to the user.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'info',
    dismissible: false,
  },
};

export const Success: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your action was completed successfully. The changes have been saved.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'success',
    dismissible: false,
  },
};

export const Warning: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Please be aware of this important information before proceeding.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'warning',
    dismissible: false,
  },
};

export const Error: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        An error occurred while processing your request. Please try again.
      </AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'error',
    dismissible: false,
  },
};

export const Dismissible: Story = {
  render: (args) => (
    <Alert {...args}>
      <AlertTitle>Dismissible Alert</AlertTitle>
      <AlertDescription>This alert can be dismissed by clicking the close button.</AlertDescription>
    </Alert>
  ),
  args: {
    variant: 'info',
    dismissible: true,
    onDismiss: () => console.log('Alert dismissed'),
  },
};

export const SimpleAlert: Story = {
  render: (args) => <Alert {...args}>A simple alert without title, just with text content.</Alert>,
  args: {
    variant: 'info',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert variant="info">
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is an informational message.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Operation completed successfully.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please review before continuing.</AlertDescription>
      </Alert>
      <Alert variant="error">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong.</AlertDescription>
      </Alert>
    </div>
  ),
};
