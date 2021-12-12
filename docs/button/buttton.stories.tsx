import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../../components/button';

export default {
  title: '通用/Button(按钮)',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: '基本按钮',
  size: 'large',
};

export const Primary = Template.bind({});
Primary.args = {
  children: '主要按钮',
  size: 'small',
};
