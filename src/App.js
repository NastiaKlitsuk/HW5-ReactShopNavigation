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
import Protected from './pages/Protected';
import ProductAddedToCart from './pages/ProductAddedToCart';
import Cart from './pages/Cart/';
import Login from './pages/Login';
import CSSTransition from 'react-transition-group/CSSTransition'
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import T from 'i18n-react';
const authProvider = (WrappedComponent, isLoggedIn) => {
  return ({ match }) => (
    isLoggedIn ?
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
  componentWillMount(){
    T.setTexts(require('./translations.json'))
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact render={(match) => !this.props.isLoggingInProgress ? <Home /> : <Login/>} path="/" />
          <Route render={({ match }) => <About />} path="/about" />
          <Route component={Product} path="/products/:id" />
          <Route component={Products} path="/products" />
          <Route component={ContactWrapper} path="/contact" />
          <Route component={Cart} path="/cart" />
          <Route component={authProvider(Protected, this.props.isLoggedIn)} path="/protected" />
          <Route render={({ match, props }) =>
            <CSSTransition appear in={!!match} timeout={1000} classNames="fade">
              <Login />
            </CSSTransition>
          } path="/login" />
          <Route component={ProductAddedToCart} path="/productaddedtocart"/>
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ loginReducer: { isLoggedIn, isLoggingInProgress } }) => ({
  isLoggedIn,
  isLoggingInProgress
})

export default connect(mapStateToProps)(App);