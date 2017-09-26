
import React from 'react';
import {
  Layout,
  Heading,
  HeroArea
} from '../../components/';
import T from 'i18n-react';
import { connect } from 'react-redux';

const ProductAddedToCart = ({ name, isLoggedIn}) => (
  <Layout>
    <HeroArea>
      <Heading size={1}>
        The product was successfully added to your shopping cart. 
        <div></div>
        {
          isLoggedIn ?
          <T.span text={{ key: "thankYou", userName: name }}/> :
          <T.span text={{ key: "register" }}/>
        }
      </Heading>
    </HeroArea>
  </Layout>
)

const mapStateToProps = ({ user: { name }, loginReducer: { isLoggedIn }}) => ({
  name,
  isLoggedIn
})

export default connect(mapStateToProps)(ProductAddedToCart);