import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../card/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

const meta = {
  title: '🩻 Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The size of the tab triggers',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="tab1" className="w-[400px]" {...args}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <Card>
          <CardHeader>
            <CardTitle>Tab 1 Content</CardTitle>
            <CardDescription>This is the content for the first tab.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab2">
        <Card>
          <CardHeader>
            <CardTitle>Tab 2 Content</CardTitle>
            <CardDescription>This is the content for the second tab.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab3">
        <Card>
          <CardHeader>
            <CardTitle>Tab 3 Content</CardTitle>
            <CardDescription>This is the content for the third tab.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
  args: {
    size: 'medium',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <Tabs defaultValue="tab1" className="w-[400px]" size="small">
        <TabsList>
          <TabsTrigger value="tab1">Small</TabsTrigger>
          <TabsTrigger value="tab2">Size</TabsTrigger>
          <TabsTrigger value="tab3">Tabs</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p className="text-sm">Small tabs content</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-sm">Small tabs content</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="text-sm">Small tabs content</p>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="tab1" className="w-[400px]" size="medium">
        <TabsList>
          <TabsTrigger value="tab1">Medium</TabsTrigger>
          <TabsTrigger value="tab2">Size</TabsTrigger>
          <TabsTrigger value="tab3">Tabs</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p className="text-sm">Medium tabs content</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-sm">Medium tabs content</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="text-sm">Medium tabs content</p>
        </TabsContent>
      </Tabs>

      <Tabs defaultValue="tab1" className="w-[400px]" size="large">
        <TabsList>
          <TabsTrigger value="tab1">Large</TabsTrigger>
          <TabsTrigger value="tab2">Size</TabsTrigger>
          <TabsTrigger value="tab3">Tabs</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <p className="text-sm">Large tabs content</p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-sm">Large tabs content</p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="text-sm">Large tabs content</p>
        </TabsContent>
      </Tabs>
    </div>
  ),
};
