import { Meta, Story } from '@storybook/react';
import { Frame } from '../../atoms/Frame/Frame';
import { FrameLayout, IFrameLayoutProps } from './FrameLayout';

export default {
  title: 'Layout/FrameLayout',
  component: FrameLayout,
  args: {
    children:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  },
} as Meta;

const Template: Story<IFrameLayoutProps> = (args) => (
  <>
    <Frame />
    <FrameLayout {...args} />
  </>
);

export const Basic = Template.bind({});
