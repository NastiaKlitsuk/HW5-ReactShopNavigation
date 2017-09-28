import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions';

describe('Products actions', () => {
    it('should create an action PRODUCT_SELECTED', () => {
        const selectedProduct = {
            id: 1,
            title: 'title',
            description: 'description',
            price: 1,
            imageUrl: ''
        }
        const expectedAction = {
            type: actions.actionTypes.PRODUCT_SELECTED,
            id: selectedProduct.id,
            title: selectedProduct.title,
            description: selectedProduct.description,
            price: selectedProduct.price,
            imageUrl: selectedProduct.imageUrl
        }
        expect(actions.productSelected(selectedProduct.id, 
                                       selectedProduct.title, 
                                       selectedProduct.description, 
                                       selectedProduct.price, 
                                       selectedProduct.imageUrl)).toEqual(expectedAction);
    })
})