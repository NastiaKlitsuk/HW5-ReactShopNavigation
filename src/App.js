import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import './App.css';
import 'font-awesome/css/font-awesome.css';
import Home from './pages/Home/';
import About from './pages/About/';
import Products from './pages/Products/';
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact/';
import NotFound from './pages/NotFound';
import { Layout } from './components/';
import Cart from './pages/Cart/';
import Login from './pages/Login';
import CSSTransition from 'react-transition-group/CSSTransition'
import cart from './services/cache.js';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'


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
  constructor(props) {
    super(props);
    this.state = { isLogedIn: false, cart: cart.items };
    this.onRemoveItemFromCart = this.onRemoveItemFromCart.bind(this);
  }

  onRemoveItemFromCart(event, productId) {
    window.alert("onRemoveItemFromCart");
    cart.onRemoveItemFromCart(event, productId);
    this.setState({ cart: cart.items });
  }

  onLoggedIn() {
    window.alert("onLoggedIn");
    cart.onLogedIn();
    this.setState({ isLogedIn: cart.isLogedIn });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact component={Home} path="/" />
          <Route render={({ match }) => <About />} path="/about" />
          <Route component={ProductPage} path="/products/:id" />
          <Route component={Products} path="/products" />
          <Route component={ContactWrapper} path="/contact" />
          <Route component={authProvider(Protected)} path="/protected" />
          <Route render={({ match, props }) =>
            <CSSTransition appear in={!!match} timeout={1000} classNames="fade">
              <Login {...props} onLoggedIn={this.onLoggedIn}/>
            </CSSTransition>
          } path="/login" />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;

//<Route exact render={(props) => <Cart {...props} onRemoveItemFromCart={this.onRemoveItemFromCart}/>} path="/" />