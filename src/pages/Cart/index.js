import React from 'react';
import { Layout, Section, Card, Heading } from '../../components/'
import CartHeroArea from './CartHeroArea';
import './cart.css';
import {productDeletedFromCart} from './actions';
import {withRouter} from 'react-router-dom';
import {getCart} from './reducer';
import {connect} from 'react-redux';

export const Cart = ({ links, match, location, productDeletedFromCart, cart }) => (
    <Layout heroContent={CartHeroArea}>
        <Section>
            <Heading size={2}>
                {new URLSearchParams(location.search).get('referral') ?
                    `Welcome from referral: ${new URLSearchParams(location.search).get('referral')}` :
                    `Buy our products`
                }
            </Heading>
            <div className="products-horizontal-gallery">
                {cart.map(({ id, price, title, imageUrl, description }, index) => (
                    <Card key={`product-${index}`} className="product-card" style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div onClick={(event) => { productDeletedFromCart(id) }} >
                            <div className="product-top-title">
                                <button className="remove" />
                                <p className="product-title">{title}</p>
                                <p className="product-price">{price}</p>
                            </div>
                            <p className="product-bottom-desc">{description}</p>
                        </div>
                    </Card>
                ))
                }
            </div>
        </Section>
    </Layout>
)


const mapStateToProps = (state) => ({ 
    cart: getCart(state)
})

export default withRouter(connect(mapStateToProps, { productDeletedFromCart })(Cart));