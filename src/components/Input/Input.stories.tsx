import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type here...',
    type: 'text',
  },
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    type: 'password',
  },
};

export const Clearable: Story = {
  args: {
    placeholder: 'Clear me',
    type: 'text',
    clearable: true,
  },
};

export const PasswordClearable: Story = {
  args: {
    placeholder: 'Password with clear',
    type: 'password',
    clearable: true,
  },
};
