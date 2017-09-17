import React from 'react';
import { Layout, Section, Card, Heading } from '../../components/'
import ProductsHeroArea from './ProductsHeroArea';
import './products.css';

import {
    Route,
    Link
} from 'react-router-dom'

const products = [
    {
        id: '123123-234-2341-123123-123123',
        name: 'Greek amphora1',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '101K USD'
    },
    {
        id: '123123-12342-456456-123123-123123',
        name: 'Greek amphora2',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '102K USD'
    },
    {
        id: '123123-345-2341-3453-123123',
        name: 'Greek amphora3',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '103K USD'
    },
    {
        id: '123123-2342-2341-45345-123123',
        name: 'Greek amphora4',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '104K USD'
    },
    {
        id: '123123-12342-234234-123123-234234',
        name: 'Greek amphora5',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '105K USD'
    },
    {
        id: '546456-22342-2341-54645-23423',
        name: 'Greek amphora6',
        imageUrl: '//c1.staticflickr.com/5/4215/35504896635_ec1a78af43_b.jpg',
        shortDesc: 'Cupidatat irure magna magna in Lorem Lorem est tempor tempor ut.',
        price: '106K USD'
    }
]


export default ({ links, match, location }) => (
    <Layout heroContent={ProductsHeroArea}>
        <Section>
            <Heading size={2}>
                {new URLSearchParams(location.search).get('referral') ?
                    `Welcome from referral: ${new URLSearchParams(location.search).get('referral')}` :
                    `Buy our products`
                }
            </Heading>
            <div className="products-horizontal-gallery">
                {products.map(({ id, name, imageUrl, shortDesc, price }, index) => (
                <Card key={`product-${id}-${index}`} className="product-card" style={{ backgroundImage: `url(${imageUrl})` }}>
                    <Link to={{ pathname: `${match.url}/${id}`, state: { id: id, title: name, price: price, description: shortDesc, imageUrl: imageUrl } }} className="product-wrapping-link">
                        <div className="product-top-title">
                            <p className="product-title">{name}</p>
                            <p className="product-price">{price}</p>
                        </div>
                        <p className="product-bottom-desc">{shortDesc}</p>
                    </Link>
                </Card>
                ))
                }
            </div>
        </Section>
    </Layout>
)