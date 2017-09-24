
import React from 'react';
import {
  Layout,
  Heading,
  Section,
  HeroArea
} from '../../components/';

const ProductAddedToCart = () => (
  <Layout>
    <HeroArea>
      <Heading size={1}>
        The product was successfully added to your shopping cart.
      </Heading>
    </HeroArea>
  </Layout>
)

export default ProductAddedToCart;