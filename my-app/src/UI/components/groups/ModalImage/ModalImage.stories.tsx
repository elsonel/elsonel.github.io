import { Meta, Story } from '@storybook/react';
import { ModalImage, ModalImageProps } from './ModalImage';

export default {
  title: 'Groups/ModalImage',
  component: ModalImage,
  args: {
    srcArray: [
      {
        src: '/example/landscape.jpg',
        title: 'SKY',
        caption: 'This is the image caption 1.',
      },
      {
        src: '/example/square.jpg',
        title: 'SQUARE',
        caption: 'This is the image caption 2.',
      },
      {
        src: '/example/logo.svg',
        title: 'LOGO',
        caption: 'This is the image caption 3.',
      },
      {
        src: '/example/portrait.jpg',
        title: 'ICON',
        caption: 'This is the image caption 4.',
      },
    ],
    indexOffset: 0,
    isVisible: true,
  },
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story<ModalImageProps> = (args) => <ModalImage {...args} />;

export const Basic = Template.bind({});

export const WithOffset = Template.bind({});
WithOffset.args = {
  ...WithOffset.args,
  indexOffset: 1,
};

export const ThreeImage = Template.bind({});
ThreeImage.args = {
  ...ThreeImage.args,
  srcArray: [
    {
      src: '/example/landscape.jpg',
      title: 'SKY',
      caption: 'This is the image caption 1.',
    },
    {
      src: '/example/square.jpg',
      title: 'SQUARE',
      caption: 'This is the image caption 2.',
    },
    {
      src: '/example/logo.svg',
      title: 'LOGO',
      caption: 'This is the image caption 3.',
    },
  ],
};

export const TwoImage = Template.bind({});
TwoImage.args = {
  ...TwoImage.args,
  srcArray: [
    {
      src: '/example/landscape.jpg',
      title: 'SKY',
      caption: 'This is the image caption 1.',
    },
    {
      src: '/example/square.jpg',
      title: 'SQUARE',
      caption: 'This is the image caption 2.',
    },
  ],
};

export const OneImage = Template.bind({});
OneImage.args = {
  ...OneImage.args,
  srcArray: [
    {
      src: '/example/landscape.jpg',
      title: 'SKY',
      caption: 'This is the image caption 1.',
    },
  ],
};

export const NoCaption = Template.bind({});
NoCaption.args = {
  ...NoCaption.args,
  srcArray: [
    {
      src: '/images/sky.jpg',
      title: undefined,
      caption: undefined,
    },
  ],
};

export const LongCaption = Template.bind({});
LongCaption.args = {
  ...LongCaption.args,
  srcArray: [
    {
      src: '/example/landscape.jpg',
      title:
        'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
      caption:
        'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    },
    {
      src: '/example/square.jpg',
      title:
        'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
      caption:
        'THIS IS A VERY VERY VERY VERY VERY VERY VERYYYYYYYYYYYYYYYYYYYYYYY LONG TITLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE',
    },
  ],
};

export const NoImage = Template.bind({});
NoImage.args = {
  ...NoImage.args,
  srcArray: [],
};
