import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './index';
import { mount, shallow } from 'enzyme';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import expect from 'expect';

const socialLinks = [
  {
    text: '',
    icon: '',
    link: ''
  }]

const navigationLinks = [
  {
    name: 'Home',
    path: '/'
  }
]

const props = {
  children: jest.children,
  menuConfig: { socialLinks: socialLinks },
  isLoggedIn: false,
  navigationLinks: navigationLinks
}

const enzymeWrapper = mount(<Router><Route><Menu {...props} /></Route></Router>);

describe('Menu renders', () => {
  it('mounts', () => {
    enzymeWrapper
  })

  it('naviagtion links are rendered', () => {
    enzymeWrapper;
    const navigationLinksWrapper = enzymeWrapper.find('div.links-container');
    const linkWrapper = navigationLinksWrapper.find('Link').find('.page-link');
    expect(linkWrapper.at(0).text()).toBe('Home');
  })

  it('login link displayed when user did not log in', () => {
    const enzymeWrapper = shallow(<Menu {...props} />);
    const loginLink = enzymeWrapper.find('NavLink').find('.login');
    const shoppingCartLink = enzymeWrapper.find('NavLink').find('.shoppingCart');
    expect(loginLink.length).toBe(1);
    expect(shoppingCartLink.length).toBe(0);
  })

  it('shopping cart link displayed when user logged in', () => {
    const loginProps = {
      children: jest.children,
      menuConfig: { socialLinks: socialLinks },
      isLoggedIn: true,
      navigationLinks: navigationLinks
    }
    const enzymeWrapper = shallow(<Menu {...loginProps} />);
    const loginLink = enzymeWrapper.find('NavLink').find('.login');
    const shoppingCartLink = enzymeWrapper.find('NavLink').find('.shoppingCart');
    expect(loginLink.length).toBe(0);
    expect(shoppingCartLink.length).toBe(1);
  })
})