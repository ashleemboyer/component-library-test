import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './Input';

export const actions = {
  onChange: action('change'),
};

storiesOf('Input', module).add('default', () => (
  <Input onChange={actions.onChange} />
));
