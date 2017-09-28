import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions';

describe('Cart actions', () => {
    it('should create an action to delete a product from the cart', () => {
        const productToDelete = {
            id: 1,
            title: 'title',
            description: 'description',
            price: 1,
            imageUrl: ''
        }
        const expectedAction = {
            type: actions.actionTypes.DELETE_PRODUCT_FROM_CART,
            id: productToDelete.id,
            title: productToDelete.title,
            description: productToDelete.description,
            price: productToDelete.price,
            imageUrl: productToDelete.imageUrl
        }
        expect(actions.deleteProductFromCart(
            productToDelete.id,
            productToDelete.title,
            productToDelete.description,
            productToDelete.price,
            productToDelete.imageUrl)).toEqual(expectedAction);
    })


    it('should create an action to add a product to the cart', () => {
        const productToAdd = {
            id: 1,
            title: 'title',
            description: 'description',
            price: 1,
            imageUrl: ''
        }
        const expectedAction = {
            type: actions.actionTypes.ADD_PRODUCT_TO_CART,
            id: productToAdd.id,
            title: productToAdd.title,
            description: productToAdd.description,
            price: productToAdd.price,
            imageUrl: productToAdd.imageUrl
        }
        expect(actions.addProductToCart(
            productToAdd.id,
            productToAdd.title,
            productToAdd.description,
            productToAdd.price,
            productToAdd.imageUrl)).toEqual(expectedAction);
    })
})