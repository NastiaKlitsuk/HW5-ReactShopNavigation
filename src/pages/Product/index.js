import React from 'react';
import './product-page.css';
import { connect } from 'react-redux';
import { Layout, Section, Heading } from '../../components/';
import { addProductToCart } from '../Cart/actions';

import {
    Link,
    withRouter
} from 'react-router-dom';
import { getSelectedProduct } from '../Products/reducer';

const Product = ({ match, location, addProductToCart, selectedProduct }) => (
    <Layout>
        <Section>
            <div className="product-header">
                <Heading size={2}>{selectedProduct.title} </Heading>
                <label> {selectedProduct.price}</label>
            </div>
            <div className="product-page">
                <p>{selectedProduct.description}</p>
                <img src={selectedProduct.imageUrl} alt=""/>
                <div onClick={(event) => { event.preventDefault(); addProductToCart(selectedProduct.id, selectedProduct.title, selectedProduct.description, selectedProduct.price, selectedProduct.imageUrl) }}>
                    <Link to={"/productaddedtocart"}>
                        <button>Buy</button>
                    </Link>
                </div>
            </div>
        </Section>
    </Layout >
)

const mapStateToProps = (state) => ({
    selectedProduct: getSelectedProduct(state)
})

export default withRouter(connect(mapStateToProps, { addProductToCart })(Product));