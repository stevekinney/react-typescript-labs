import type { Meta, StoryObj } from '@storybook/react-vite';
import { NewsArticle } from './news-article';

const meta = {
  title: '🎸 Examples/Daily Closure/News Article',
  component: NewsArticle,
} satisfies Meta<typeof NewsArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
  },
};
