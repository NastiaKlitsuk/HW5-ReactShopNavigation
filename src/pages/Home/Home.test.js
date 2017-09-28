import React from 'react';
import expect from 'expect';
import thunk from 'redux-thunk';
import Home from './index';
import renderer from 'react-test-renderer';
import { Router, Route } from 'react-router-dom';
import { mount, shallow } from 'enzyme';

describe('Home snapshot', () => {
    it('home renders correctly with menu closed', () => {
        const props = { links: {}};
        const wrapper = shallow(<Home {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
})