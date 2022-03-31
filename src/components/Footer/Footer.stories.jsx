import React from 'react';

import { Footer } from './Footer';

export default {
  title: 'Example/Footer',
  component: Footer,
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

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  footerText: "Primary Footer: ",
  primary: true,
  link: "www.primary.link",
  linkText: "www.primary.link",
  size: "medium"
};

export const Secondary = Template.bind({});
Secondary.args = {
  footerText: "Secondary Footer",
  primary: false,
  link: null,
  linkText: null,
  size: "medium"
};

