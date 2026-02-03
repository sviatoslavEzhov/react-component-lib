import type { Meta, StoryObj } from '@storybook/react-vite';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning'],
    },
    duration: {
      control: 'number',
    },
    closable: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: 'Default toast',
  },
};

export const Success: Story = {
  args: {
    message: 'Success toast',
    type: 'success',
  },
};

export const Error: Story = {
  args: {
    message: 'Error toast',
    type: 'error',
  },
};

export const ClosableWithDuration: Story = {
  args: {
    message: 'Closable + auto close (5s)',
    closable: true,
    duration: 5000,
  },
};

export const NotClosableWithDefaultDuration: Story = {
  args: {
    message: 'Not closable, closes after 3s',
    closable: false,
  },
};

export const NotClosableWithCustomDuration: Story = {
  args: {
    message: 'Not closable, closes after 1s',
    closable: false,
    duration: 1000,
  },
};
