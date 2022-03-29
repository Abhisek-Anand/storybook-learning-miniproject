import React from 'react';

import { Image } from './Image';
import plane from '../../stories/assets/plane.svg'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Image',
  component: Image,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Image {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  height:"20rem",
  width:"20rem",
  borderRadius: "10rem",
  alt: 'Button',
  src: "https://source.unsplash.com/random",
};

export const Secondary = Template.bind({});
Secondary.args = {
  alt: 'Button',
  src:{plane}
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  alt: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
