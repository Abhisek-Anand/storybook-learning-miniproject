import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    label: 'Buttons'
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '1rem' }}>
        <Story />
      </div>
    ),
  ],
};


const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  primary: true,
  label: 'Primary Button',
};

export const SubmitButton = Template.bind({});
SubmitButton.args = {
  backgroundColor: "rgba(25, 189, 25, 1)",
  size: 'small',
  label: 'Submit',
};

export const ResetButton = Template.bind({});
ResetButton.args = {
  backgroundColor: "red",
  size: 'small',
  label: 'Reset',
};
