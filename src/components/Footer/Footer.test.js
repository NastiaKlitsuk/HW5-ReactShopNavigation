import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './index';
import {mount} from 'enzyme';

describe('Footer renders', () => {
    it('mounts', () => {
        const props = {
            children: jest.children
          }
          mount(<Footer {...props} />)
    }) 
  })