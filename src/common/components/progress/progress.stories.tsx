import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, useEffect } from 'react';
import { Progress } from './progress';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The progress value',
    },
    max: {
      control: { type: 'number', min: 1 },
      description: 'The maximum value',
    },
    animated: {
      control: 'boolean',
      description: 'Whether to animate the progress bar',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the progress is indeterminate',
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    max: 100,
  },
};

export const WithLabel: Story = {
  args: {
    value: 45,
    max: 100,
    showLabel: true,
  },
};

export const WithCustomLabel: Story = {
  args: {
    value: 30,
    max: 100,
    label: 'Upload Progress',
    showLabel: true,
  },
};

export const Animated: Story = {
  args: {
    value: 80,
    max: 100,
    animated: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(timer);
    }, []);

    return (
      <div className="space-y-4">
        <Progress value={progress} showLabel />
        <p className="text-sm text-slate-600 dark:text-slate-400">Auto-incrementing progress bar</p>
      </div>
    );
  },
};

export const MultipleProgress: Story = {
  render: () => {
    const tasks = [
      { name: 'Download', value: 100 },
      { name: 'Installation', value: 65 },
      { name: 'Configuration', value: 30 },
      { name: 'Verification', value: 0 },
    ];

    return (
      <div className="space-y-4">
        <h3 className="font-semibold">Installation Progress</h3>
        {tasks.map((task) => (
          <div key={task.name}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="font-medium">{task.name}</span>
              <span className="text-slate-600 dark:text-slate-400">{task.value}%</span>
            </div>
            <Progress value={task.value} />
          </div>
        ))}
      </div>
    );
  },
};
