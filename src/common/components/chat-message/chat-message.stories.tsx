import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChatMessage } from './chat-message';

const meta = {
  title: 'Components/ChatMessage',
  component: ChatMessage,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    role: {
      control: 'select',
      options: ['user', 'assistant', 'system'],
      description: 'The role of the message sender',
    },
    hidden: {
      control: 'boolean',
      description: 'Whether the message is hidden',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the message is loading',
    },
    showTimestamp: {
      control: 'boolean',
      description: 'Whether to show the timestamp',
    },
  },
} satisfies Meta<typeof ChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMessage: Story = {
  args: {
    role: 'user',
    content: 'Hello! How can you help me today?',
    timestamp: new Date(),
    showTimestamp: true,
  },
};

export const AssistantMessage: Story = {
  args: {
    role: 'assistant',
    content:
      'Hello! I can help you with a variety of tasks including answering questions, writing code, and providing information. What would you like to know?',
    timestamp: new Date(),
    showTimestamp: true,
  },
};

export const SystemMessage: Story = {
  args: {
    role: 'system',
    content: 'Connection established. Chat session started.',
    timestamp: new Date(),
    showTimestamp: true,
  },
};

export const LoadingMessage: Story = {
  args: {
    role: 'assistant',
    content: '',
    loading: true,
  },
};

export const MultiModalMessage: Story = {
  args: {
    role: 'assistant',
    content: [
      {
        type: 'text',
        text: 'Here is an example of a multi-modal message with different content types:',
      },
      {
        type: 'code',
        language: 'javascript',
        code: `function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));`,
      },
      {
        type: 'text',
        text: 'This code creates a simple greeting function.',
      },
    ],
    timestamp: new Date(),
    showTimestamp: true,
  },
};

export const Conversation: Story = {
  args: {
    role: 'user',
    content: 'Example message',
  },
  render: () => {
    const messages = [
      {
        role: 'system' as const,
        content: 'Welcome to the chat!',
        timestamp: new Date('2024-01-01T10:00:00'),
      },
      {
        role: 'user' as const,
        content: 'Can you explain what TypeScript is?',
        timestamp: new Date('2024-01-01T10:01:00'),
      },
      {
        role: 'assistant' as const,
        content:
          'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
        timestamp: new Date('2024-01-01T10:01:30'),
      },
      {
        role: 'user' as const,
        content: 'Can you show me a simple example?',
        timestamp: new Date('2024-01-01T10:02:00'),
      },
      {
        role: 'assistant' as const,
        content: [
          {
            type: 'text' as const,
            text: "Sure! Here's a simple TypeScript example:",
          },
          {
            type: 'code' as const,
            language: 'typescript',
            code: `interface Person {
  name: string;
  age: number;
}

function greetPerson(person: Person): string {
  return \`Hello, \${person.name}! You are \${person.age} years old.\`;
}

const user: Person = {
  name: 'Alice',
  age: 30
};

console.log(greetPerson(user));`,
          },
          {
            type: 'text' as const,
            text: "This example shows TypeScript's type system with interfaces and type annotations.",
          },
        ],
        timestamp: new Date('2024-01-01T10:02:30'),
      },
      {
        role: 'user' as const,
        content: "That's helpful, thank you!",
        timestamp: new Date('2024-01-01T10:03:00'),
      },
    ];

    return (
      <div className="mx-auto flex max-w-4xl flex-col gap-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} showTimestamp />
        ))}
      </div>
    );
  },
};
