import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './index';
import { shallow, mount } from 'enzyme';
import expect from 'expect';

describe('Layout tests', () => {
    it('initial menuState should be false', () => {
        const layout = shallow(<Layout />);
        expect(layout.state().menuState).toBe(false);
    })

    it('menuState should be flase after clicking somewhere', () => {
        const layout = shallow(<Layout />);
        layout.state().menuState = true;
        expect(layout.simulate('click').state().menuState).toBe(false);
    })
})