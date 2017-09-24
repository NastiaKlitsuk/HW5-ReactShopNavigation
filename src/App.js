import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import Home from './pages/Home/';
import About from './pages/About/';
import Products from './pages/Products/';
import Product from './pages/Product';
import Contact from './pages/Contact/';
import NotFound from './pages/NotFound';
import ProductAddedToCart from './pages/ProductAddedToCart';
import { Layout } from './components/';
import Cart from './pages/Cart/';
import Login from './pages/Login';
import CSSTransition from 'react-transition-group/CSSTransition'
import { Provider } from 'react-redux';
import store from './store';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  BrowserRouter
} from 'react-router-dom';

const Protected = () => (<div>Protected</div>);

const authProvider = (WrappedComponent) => {
  const isAuthenticated = false;

  return ({ match }) => (
    isAuthenticated ?
      <WrappedComponent {...this.props } match={match} /> :
      <Redirect to="login" />
  )
}

const ContactWrapper = () => {
  return (
    <Contact navigationMessage="Are you sure you want to navigate?" />
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route render={({ match }) => <About />} path="/about" />
          <Route component={Product} path="/products/:id" />
          <Route component={Products} path="/products" />
          <Route component={ContactWrapper} path="/contact" />
          <Route component={Cart} path="/cart" />
          <Route component={authProvider(Protected)} path="/protected" />
          <Route render={({ match, props }) =>
            <CSSTransition appear in={!!match} timeout={1000} classNames="fade">
              <Login {...props} onLoggedIn={this.onLoggedIn} />
            </CSSTransition>
          } path="/login" />
          <Route component={ProductAddedToCart} path="/productaddedtocart"/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;