import React from 'react';
import StickyNote from './StickyNote';

export default {
  title: 'components/StickyNote',
  component: StickyNote,
  argTypes: {

  }
}

const Template = (args) => <StickyNote {...args} />

export const Default = Template.bind({})
Default.args = {

}

