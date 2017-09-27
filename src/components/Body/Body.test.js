import React from 'react';
import ReactDOM from 'react-dom';
import Body from './index';
import { mount } from 'enzyme';

describe('Body renders', () => {
  const props = {
    children: jest.children
  }
  it('mounts', () => {
    mount(<Body {...props} />)
  })
})