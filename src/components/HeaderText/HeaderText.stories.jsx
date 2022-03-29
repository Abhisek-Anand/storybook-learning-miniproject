import React from 'react';

import { HeaderText } from './HeaderText';

export default {
  title: 'Example/HeaderText',
  component: HeaderText,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  argTypes: {
    color: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem 0rem' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <HeaderText {...args} />;

export const Large = Template.bind({});
Large.args = {
  title: 'Jane Doe',
  color: "rgba(25, 189, 25, 1)",
};

export const Medium = Template.bind({});
Medium.args = {
  title: 'Jane lol',
  color: "red",
};

export const Small = Template.bind({});
Small.args = {
  title: 'Jane lol',
  color: "red",
};
