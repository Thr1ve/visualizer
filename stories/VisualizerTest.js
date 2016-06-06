import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

// import Visualizer from '../src';
import Visualizer from '../lib';

storiesOf('Visualizer', module)
  .add('object', () => (
    <Visualizer
      data={{ global: { foo: 'bar', beep: 'boop', admin: false } }}
      useHljs='false'
    />
  ))
  .add('array', () => (
    <Visualizer
      data={['hello', 'world', 1, 2, 3]}
      useHljs='false'
    />
  ))
  .add('mixed', () => (
    <Visualizer
      data={{ users: ['bob', 'sally', 'joe'], aNumber: 1234, isAdmin: true }}
      useHljs='false'
    />
  ));
