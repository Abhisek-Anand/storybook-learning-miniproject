import React from 'react';

import { SearchHeader } from './SearchHeader';

export default {
  title: 'Example/SearchHeader',
  component: SearchHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem 0rem' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <SearchHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "lightgray",
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "red",
};

