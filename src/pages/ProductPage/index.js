import React from 'react';
import './product-page.css';
import store from '../../services/cache.js';
import { Layout, Section, Card, Heading } from '../../components/'

import {
    Route,
    Link
} from 'react-router-dom'

export default ({ match, location }) => (
    <Layout>
        <Section>
            <div className="product-header">
                <Heading size={2}>{location.state.title} </Heading>
                <label> {location.state.price}</label>
            </div>
            <div className="product-page">
                <p>{location.state.description}</p>
                <img src={location.state.imageUrl} />
                <div onClick={(event) => { store.onAddedToCart(event, location.state.title, location.state.description, location.state.price, location.state.imageUrl) }}>
                    <button>Buy</button>
                </div>
            </div>
        </Section>
    </Layout >
)