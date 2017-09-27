import React from 'react';
import ReactDOM from 'react-dom';
import Card from './index';
import {mount} from 'enzyme';

describe('Card renders', () => {
    it('mounts', () => {
        const props = {
            children: jest.children,
            className: ""
          }
          mount(<Card {...props} />)
    }) 
  })