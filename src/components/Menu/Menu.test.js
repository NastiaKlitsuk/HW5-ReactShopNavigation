import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './index';
import { mount, shallow } from 'enzyme';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import expect from 'expect';
import renderer from 'react-test-renderer';

const socialLinks = [
  {
    text: 'facebook',
    icon: '',
    link: 'www.facebook.com'
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

const mountedMenu = mount(<Router><Route><Menu {...props} /></Route></Router>);

describe('Menu renders', () => {
  it('mounts', () => {
    mountedMenu
  })

  it('naviagtion links are rendered', () => {
    mountedMenu;
    const navigationLinksWrapper = mountedMenu.find('div.links-container');
    const linkWrapper = navigationLinksWrapper.find('Link').find('.page-link');
    expect(linkWrapper.at(0).text()).toBe('Home');
  })

  it('login link displayed when user did not log in', () => {
    const shallowMenu = shallow(<Menu {...props} />);
    const loginLink = shallowMenu.find('NavLink').find('.login');
    const shoppingCartLink = shallowMenu.find('NavLink').find('.shoppingCart');
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
    const shallowMenu = shallow(<Menu {...loginProps} />);
    const loginLink = shallowMenu.find('NavLink').find('.login');
    const shoppingCartLink = shallowMenu.find('NavLink').find('.shoppingCart');
    expect(loginLink.length).toBe(0);
    expect(shoppingCartLink.length).toBe(1);
  })

  it('menu renders correctly', () => {
    const tree = renderer.create(<Router><Route><Menu {...props} /></Route></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
