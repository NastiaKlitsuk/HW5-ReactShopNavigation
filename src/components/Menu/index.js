import React from 'react';
import classNames from 'classnames';
import SocialLinks from '../SocialLinks/';
import { Link, NavLink } from 'react-router-dom';
import './menu.css';
import { connect } from 'react-redux';

const navigationLinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Products',
        path: '/products'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
    {
        name: 'Login',
        path: '/login'
    },
    {
        name: 'Protected',
        path: '/protected'
    }
]

export const Menu = ({ children, menuConfig: { menuState, open, socialLinks }, isLoggedIn }) => (
    <div className="App-menubar">
        <div>
            <label className="hamburger-icon fa fa-bars" onClick={() => open()} />
            <div className={classNames(['menu-content', menuState && 'opened'])}>
                <div className="links-container">
                    {navigationLinks.map(({ name, path }, index) => (
                        <Link to={`${path}`} className="page-link" key={`page-${name.toLowerCase()}-${index}`}>
                            {name}
                        </Link>
                    ))}
                    <Link className="page-link" to={{ pathname: '/products', search: 'referral=Amazon' }}>Referral Link</Link>
                </div>
                <div className="socialLinks">
                    <SocialLinks links={socialLinks} type="icons" />
                </div>
            </div>
            <div className={classNames(['overlay', menuState && 'active'])} />
        </div>
        <div>
            {
                isLoggedIn ?
                <NavLink to="/cart">
                    <button className="shoppingCart" /> 
                </NavLink> :
                <NavLink to="/login" className="login">Login</NavLink>
            }
        </div>
    </div>
)

const mapStateToProps = ({ loginReducer: { isLoggedIn } }) => ({
    isLoggedIn
})

export default connect(mapStateToProps)(Menu);