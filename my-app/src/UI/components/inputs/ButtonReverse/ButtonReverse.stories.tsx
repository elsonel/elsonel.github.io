import { Meta, Story } from '@storybook/react';
import { ButtonReverse, ButtonReverseProps } from './ButtonReverse';

export default {
  title: 'Inputs/ButtonReverse',
  component: ButtonReverse,
  args: {
    children: 'ESCAPE',
    border: '#F37676',
    borderHovered: '#F37676',
    color: '#F37676',
    colorHovered: 'white',
    isActive: false,
    isDisabled: false,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ButtonReverseProps> = (args) => (
  <ButtonReverse {...args} />
);

export const Basic = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  ...Disabled.args,
  isDisabled: true,
};

export const Colored = Template.bind({});
Colored.args = {
  ...Colored.args,
  border: 'black',
  borderHovered: 'grey',
  color: 'black',
  colorHovered: 'grey',
};

export const Opposite = Template.bind({});
Opposite.args = {
  ...Opposite.args,
  border: 'grey',
  borderHovered: 'grey',
  color: 'white',
  colorHovered: 'grey',
};

export const Active = Template.bind({});
Active.args = {
  ...Active.args,
  border: 'grey',
  borderHovered: 'grey',
  color: 'white',
  colorHovered: 'white',
};
