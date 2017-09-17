import React from 'react';
import { Layout, Section, Card, Heading } from '../../components/'
import CartHeroArea from './CartHeroArea';
import cart from '../../services/cache.js';
import './cart.css';

export default ({ links, match, location, onRemoveItemFromCart }) => (
    <Layout heroContent={CartHeroArea}>
        <Section>
            <Heading size={2}>
                {new URLSearchParams(location.search).get('referral') ?
                    `Welcome from referral: ${new URLSearchParams(location.search).get('referral')}` :
                    `Buy our products`
                }
            </Heading>
            <div className="products-horizontal-gallery">
                {cart.items.map(({ id, price, title, imageUrl, description }, index) => (
                    <Card key={`product-${index}`} className="product-card" style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div onClick={(event) => { onRemoveItemFromCart(event, id) }} >
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