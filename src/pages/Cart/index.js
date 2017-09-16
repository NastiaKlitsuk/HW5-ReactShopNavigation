import React from 'react';
import { Layout, Section, Card, Heading } from '../../components/'
import CartHeroArea from './CartHeroArea';
import store from '../../services/cache.js';

import {
    Route,
    Link
} from 'react-router-dom'


export default ({ links, match, location }) => (
    <Layout heroContent={CartHeroArea}>
        <Section>
            <Heading size={2}>
                {new URLSearchParams(location.search).get('referral') ?
                    `Welcome from referral: ${new URLSearchParams(location.search).get('referral')}` :
                    `Buy our products`
                }
            </Heading>
            <div className="products-horizontal-gallery">
                {store.cart.map(({ price, title, imageUrl, description }, index) => (
                    <Card key={`product-${index}`} className="product-card" style={{ backgroundImage: `url(${imageUrl})` }}>
                        <div>
                            <div className="product-top-title">
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