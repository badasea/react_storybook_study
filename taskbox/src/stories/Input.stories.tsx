// src/components/Input/Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Form/Input',
  component: Input,
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    disabled: false,
  },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'search'] },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {};

export const Error: Story = {
  args: {
    error: '올바른 이메일 형식이 아닙니다.',
  },
};

export const WithHelperText: Story = {
  args: {
    helperText: '이메일을 입력해주세요.',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
