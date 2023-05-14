import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Gallery, IGalleryProps } from './Gallery';
import { Theme } from './../../../../utilities/themes/Theme';

const IMAGES = [
  { src: Theme.image.examplePortrait, alt: 'IMAGE 1' },
  { src: Theme.image.examplePortrait2, alt: 'IMAGE 2' },
  { src: Theme.image.examplePortrait3, alt: 'IMAGE 3' },
  { src: Theme.image.examplePortrait4, alt: 'IMAGE 4' },
  { src: Theme.image.examplePortrait5, alt: 'IMAGE 5' },
  { src: Theme.image.examplePortrait6, alt: 'IMAGE 6' },
  { src: Theme.image.exampleLandscape, alt: 'IMAGE 7' },
  { src: Theme.image.exampleLandscape2, alt: 'IMAGE 8' },
  { src: Theme.image.exampleLandscape3, alt: 'IMAGE 9' },
  { src: Theme.image.exampleLandscape4, alt: 'IMAGE 10' },
  { src: Theme.image.exampleLandscape5, alt: 'IMAGE 11' },
  { src: Theme.image.exampleLandscape6, alt: 'IMAGE 12' },
];

const IMAGES_DESKTOP = [
  [IMAGES[0], IMAGES[1], IMAGES[2]],
  [IMAGES[3], IMAGES[4], IMAGES[5]],
  [IMAGES[6], IMAGES[7], IMAGES[8]],
  [IMAGES[9], IMAGES[10], IMAGES[11]],
];

const IMAGES_MOBILE = [
  [IMAGES[0], IMAGES[1]],
  [IMAGES[2], IMAGES[3]],
  [IMAGES[4], IMAGES[5]],
  [IMAGES[6], IMAGES[7]],
  [IMAGES[8], IMAGES[9]],
  [IMAGES[10], IMAGES[11]],
];

export default {
  title: 'Groups/ProjectDetailsPage/Gallery',
  component: Gallery,
  argTypes: { onAllImagesLoad: { action: 'loaded' } },
  args: {
    images: IMAGES_DESKTOP,
  },
} as Meta;

const Template: Story<IGalleryProps> = (args) => <Gallery {...args} />;

export const Desktop = Template.bind({});

export const Mobile = Template.bind({});
Mobile.args = {
  ...Mobile.args,
  images: IMAGES_MOBILE,
};
