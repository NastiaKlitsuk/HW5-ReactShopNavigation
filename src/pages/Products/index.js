import React from 'react';
import { Layout, Section, Card, Heading } from '../../components/'
import ProductsHeroArea from './ProductsHeroArea';
import './products.css';
import {
    Route,
    Link
} from 'react-router-dom';
import { getProducts, getSelectedProduct } from './reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { productSelected } from './actions';

const Products = ({ links, match, location, products, productSelected }) => (
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
                    <Link to={`${match.url}/${id}`} className="product-wrapping-link" 
                    onClick={(event) => {event.preventDefault; productSelected(id, name, shortDesc, price, imageUrl)}}>
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

const mapStateToProps = (state) => ({ 
    products: getProducts(state),
    selectedProduct: getSelectedProduct(state)
})

export default withRouter(connect(mapStateToProps, {productSelected})(Products));
